from django.urls import path
from .views import todoAPIView,todoUpdateAPIView

urlpatterns = [
    path('todo/',todoAPIView.as_view()),
    path('todo1/<int:id>',todoUpdateAPIView.as_view()),

]