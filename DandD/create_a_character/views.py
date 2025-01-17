from django.shortcuts import render

def create_character(request):

    return render(request, "character/create_character.html")