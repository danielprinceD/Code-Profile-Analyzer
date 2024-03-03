from django.shortcuts import render
from .models import ApplicationModel
from .serializers import ApplicationSerializer
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
class ApplicationView(CreateAPIView):
    queryset = ApplicationModel.objects.all()
    serializer_class = ApplicationSerializer
    def perform_create(self, serializer):
        if serializer.is_valid() :
            serializer.save()
        
    