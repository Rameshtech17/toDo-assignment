from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView
from .models import Text, toDoText
from .serializers import todoSerializer,todoSerializer1
from rest_framework.response import Response
from rest_framework import status, generics, permissions


# Create your views here.

class todoAPIView(APIView):

    def get(self,request):
        qury = Text.objects.all()
        serializer = todoSerializer(qury,many =True)
        return Response(serializer.data)

    def post(self, request):
        serializer = todoSerializer(data=request.data)
        if(serializer.is_valid):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class todoAPIView1(APIView):

    def get(self,request):
        qury = toDoText.objects.all()
        serializer = todoSerializer1(qury,many =True)
        return Response(serializer.data)

    def post(self, request):
        serializer = todoSerializer1(data=request.data)
        
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

