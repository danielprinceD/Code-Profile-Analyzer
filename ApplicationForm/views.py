from django.shortcuts import render , redirect
from .models import ApplicationModel
from .serializers import ApplicationSerializer
from rest_framework.generics import CreateAPIView , ListAPIView
from rest_framework.response import Response
from rest_framework.mixins import ListModelMixin
class ApplicationView(CreateAPIView):
    queryset = ApplicationModel.objects.all()
    serializer_class = ApplicationSerializer
    def perform_create(self, serializer):
        if serializer.is_valid() :
            serializer.save()
            
            
class ViewAPI(ListAPIView):
    queryset = ApplicationModel.objects.all()
    serializer_class = ApplicationSerializer
    