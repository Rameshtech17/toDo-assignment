from rest_framework import serializers
from .models import Text,toDoText

class todoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = ['id','text','completed']


class todoSerializer1(serializers.ModelSerializer):
    class Meta:
        model = toDoText
        fields = ['id','text','status']