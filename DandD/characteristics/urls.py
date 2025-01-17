from django.contrib import admin
from django.urls import path
from characteristics.views import *


app_name = 'characteristics'
urlpatterns = [
    path('', characteristics_page, name='characteristics_page'),
    # path('information-block/', characteristics_information_block, name='characteristics_information-block'),
]