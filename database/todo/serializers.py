from rest_framework import serializers
from .models import toDoText

class todoSerializer(serializers.ModelSerializer):
    class Meta:
        model = toDoText
        fields = ['id','text','status']


