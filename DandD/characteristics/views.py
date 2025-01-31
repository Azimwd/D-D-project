import json
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render
import requests
from bs4 import BeautifulSoup as bs
from rest_framework import viewsets
from .models import Characteristics
from .forms import CharacterForm
from django.views.decorators.csrf import requires_csrf_token

def characteristics_page(request, id):
    try:
        character = Characteristics.objects.get(id=id)  # Замените id на нужное
    except Characteristics.DoesNotExist:
        return JsonResponse({"error": "Character not found"}, status=404)
    
    return render(request, 'characteristics/index.html', {'character': character})

def characteristics_information_block(request):
    context = {
        'information_ul': None,
        'comments_str': None,
        }  # По умолчанию имя отсутствует
    
    if request.method == "POST":
        text = request.POST.get('text', '')
        URL_TEMPLATE = text
        r = requests.get(URL_TEMPLATE)
        soup = bs(r.text, "html.parser")

        information = soup.find('div', class_='card-wrapper')
        information_str = str(information)

        comments = soup.find('div', class_='card paper-1')
        comments_str = str(comments)

        context['information_ul'] = information_str
        context['comments_str'] = comments_str
        
        # Возвращаем ответ в формате JSON
        return JsonResponse(context)
    
    return JsonResponse(context)

@requires_csrf_token
def send_characteristics_tomodel(request, id):
    if request.method == "POST":
        data = json.loads(request.body)
        character = get_object_or_404(Characteristics, id=id)

        # Передаем данные и экземпляр модели в форму
        form = CharacterForm(data, instance=character)

        
        character = form.save()  # Сохраняем изменения
        return JsonResponse({"status": "Ok",})


        # В случае ошибки
        return JsonResponse({"status": "error",})
    return JsonResponse({"status": "error", "message": "Некорректный запрос."})

