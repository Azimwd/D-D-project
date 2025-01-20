from attr import field
from rest_framework import serializers
from .models import Characteristics

class CharacteristicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characteristics
        fields = '__all__'