from django.http import JsonResponse
from django.shortcuts import render
import requests
from bs4 import BeautifulSoup as bs
from rest_framework import viewsets
from .models import Characteristics
from .serializers import CharacteristicsSerializer


class CharacteristicsViewSet(viewsets.ModelViewSet):
    queryset = Characteristics.objects.all()
    serializer_class = CharacteristicsSerializer

def characteristics_page(request):
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
    
    return render(request, 'characteristics/index.html', context)




# def characteristics_information_block(request):
#     if request.method == "POST":
#         # Указание ключа 'text' для метода get
#         text = request.POST.get('text')  # получаем данные из запроса
#         context = {
#             'text': text,
#         }
#     else:
#         context = {'text': 'default_text'}  # значение по умолчанию, если не POST запрос

#     return render(request, 'characteristics/index.html', context)
