from django.contrib import admin
from .models import ApplicationModel 
# Register your models here.

class ApplicationAdmin(admin.ModelAdmin):
    model = ApplicationModel
    fields = ['__all__ ']

admin.site.register(ApplicationModel)