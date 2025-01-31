from django.contrib import admin
from django.urls import path
from characteristics.views import *
from rest_framework.routers import DefaultRouter

app_name = 'characteristics'


urlpatterns = [
    path('<int:id>/', characteristics_page, name='characteristics_page'),
    path('information-block/', characteristics_information_block, name='characteristics_information-block'),
    path('<int:id>/save/', send_characteristics_tomodel, name='save_model'),
]