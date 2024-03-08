from django.db import models
from Scrapper import githubScrapper
class ApplicationModel(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50, unique = True)
    email = models.EmailField(max_length=50 , unique = True)
    github = models.CharField(max_length=50 , unique = True)
    leetcode = models.CharField(max_length=50 , unique = True)
    interview = models.CharField(max_length=50 , unique = True)
    linkedin = models.CharField(max_length=50 , unique = True)
    phonenum = models.IntegerField(null = False)
    @property
    def ghProfile(self ):
        self.github = self.github.strip()
        return githubScrapper.getProfile(self.github)
    @property
    def ghProgram(self ):
        self.github = self.github.strip()
        return githubScrapper.getProgram(self.github)
    @property
    def ghSteak(self ):
        self.github = self.github.strip()
        return githubScrapper.getSteak(self.github)
    @property
    def ghGraph(self):
        self.github = self.github.strip()
        return githubScrapper.getGraph(self.github)
    
        