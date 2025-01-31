from django.http import JsonResponse
from django.shortcuts import get_object_or_404, redirect,render
from characteristics.models import Characteristics
from characteristics.forms import CharacterForm
import json
from django.views.decorators.csrf import requires_csrf_token

@requires_csrf_token
def create_character(request):
    user = request.user
    if request.method == "POST":
        data = json.loads(request.body)
        form = CharacterForm(data)
        if form.is_valid():
            character = form.save(commit=False)
            character.user = request.user
            character.save()

            return JsonResponse({
                "status": "success",
                "character_id": character.id,
                "name": character.name,
                "character_class": character.character_class,
                "current_hp": character.current_hp,
                "message": "Персонаж создан успешно."
            })

    characters = user.characters.all()
    return render(request, "character/create_character.html", {'characters': characters})

def delete_character(request, pk):
    character = get_object_or_404(Characteristics, pk=pk)

    if request.method == "POST":
        character.delete()

        return redirect('character:create_character')
    return redirect('character:create_character')