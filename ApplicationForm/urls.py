from django.urls import path
from .views import ApplicationView , ViewAPI 
urlpatterns = [
    path('api/',ApplicationView.as_view()),
    path('get/' ,ViewAPI.as_view())
]
