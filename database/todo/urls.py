from django.urls import path
from .views import todoAPIView

urlpatterns = [
    path('todo/',todoAPIView.as_view()),

]