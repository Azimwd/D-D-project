from django.contrib import admin
from django.urls import path
from create_a_character.views import *


app_name = 'character'
urlpatterns = [
    path('', create_character, name='create_character'),
]