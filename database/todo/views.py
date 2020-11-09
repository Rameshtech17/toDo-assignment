from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView
from .models import  toDoText
from .serializers import todoSerializer
from rest_framework.response import Response
from rest_framework import status, generics, permissions


# Create your views here.

class todoAPIView(APIView):

    def get(self,request):
        qury = toDoText.objects.all()
        serializer = todoSerializer(qury,many =True)
        return Response(serializer.data)

    def post(self, request):
        serializer = todoSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        
    def put(self,request,id):
        qury = self.get_object(id)
        serializer = todoSerializer(qury,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        clsses = self.get_object(id)
        clsses.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



