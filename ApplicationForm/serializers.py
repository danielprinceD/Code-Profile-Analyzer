from .models import ApplicationModel
from rest_framework import serializers

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationModel
        fields = ['name','address','email', 'github' , 'leetcode' , 'interview' ,'linkedin' , 'phonenum', 'ghProfile' , 'ghProgram' , 'ghSteak' , 'ghGraph', 'ghContribution' ]