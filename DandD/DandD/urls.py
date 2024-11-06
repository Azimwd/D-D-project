from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("main.urls", namespace="main")),
    path("stats/", include("stats.urls", namespace="stats")),
    path("users/", include("users.urls", namespace="users")),
]
