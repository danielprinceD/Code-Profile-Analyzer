from django.db import models

class ApplicationModel(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50, unique = True)
    email = models.EmailField(max_length=50 , unique = True)
    github = models.CharField(max_length=50 , unique = True)
    leetcode = models.CharField(max_length=50 , unique = True)
    interview = models.CharField(max_length=50 , unique = True)
    linkedin = models.CharField(max_length=50 , unique = True)
    phonenum = models.IntegerField(null = False)
    