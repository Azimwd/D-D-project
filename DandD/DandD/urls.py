from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("main.urls", namespace="main")),
    path("characteristics/", include("characteristics.urls", namespace="characteristics")),
    path("users/", include("users.urls", namespace="users")),
    path("create_a_character/", include("create_a_character.urls", namespace="character")),
]
