from django.contrib import admin
from django.urls import path
from stats.views import *

app_name = 'stats'

urlpatterns = [
    path('', stats, name='stats'),
]
