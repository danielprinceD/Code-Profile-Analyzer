from django.urls import path
from .views import ApplicationView
urlpatterns = [
    path('api/',ApplicationView.as_view())
]
