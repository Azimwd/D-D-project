from django import forms 
from django.contrib.auth.models import User
from .models import Characteristics
class CharacterForm(forms.ModelForm):
    class Meta:
        model = Characteristics
        exclude = ['user']