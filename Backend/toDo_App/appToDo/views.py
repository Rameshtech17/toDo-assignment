from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView
from .models import toDoText
from .serializers import todoSerializer
from rest_framework.response import Response
from rest_framework import status, generics, permissions

class toDoAPIView(APIView):

    def get(self,request):
        query = toDoText.objects.all()
        serializer = todoSerializer( query, many = True)
        return Response(serializer.data)

    def post(self, request):
        serializer = todoSerializer(data=request.data)

        if(serializer.is_valid):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)