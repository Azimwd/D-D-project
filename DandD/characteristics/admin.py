from atexit import register
from django.contrib import admin
from .models import Characteristics

admin.site.register(Characteristics)