from django.contrib import admin
from django.urls import path
from characteristics.views import *
from rest_framework.routers import DefaultRouter
from .views import CharacteristicsViewSet

app_name = 'characteristics'

router = DefaultRouter()
router.register(r'characteristics', CharacteristicsViewSet, basename='characteristics')

urlpatterns = [
    path('', characteristics_page, name='characteristics_page'),
    # path('information-block/', characteristics_information_block, name='characteristics_information-block'),
] + router.urls