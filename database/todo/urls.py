from django.urls import path
from .views import todoAPIView, todoAPIView1

urlpatterns = [
    path('todo/',todoAPIView.as_view()),
    path('todo1/',todoAPIView1.as_view())
]