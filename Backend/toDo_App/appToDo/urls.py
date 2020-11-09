from django.urls import path
from .views import toDoAPIView

urlpurlpatterns = [
    path('todo/',toDoAPIView.as_view())
]