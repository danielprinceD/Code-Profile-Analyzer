from django.db import models
from Scrapper import githubScrapper , leetCode
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
        return githubScrapper.getProfile(self.github).strip()
    @property
    def ghProgram(self ):
        self.github = self.github.strip()
        return githubScrapper.getProgram(self.github).strip()
    @property
    def ghSteak(self ):
        self.github = self.github.strip()
        return githubScrapper.getSteak(self.github).strip()
    @property
    def ghGraph(self):
        self.github = self.github.strip()
        return githubScrapper.getGraph(self.github).strip()
    @property
    def ghContribution(self):
        self.github = self.github.strip()
        return githubScrapper.getContribution(self.github).strip()
    
    
    
    @property
    def ES(self):
        easyS = leetCode.getEasySolved(self.leetcode.strip()).strip()
        return easyS
    @property
    def EQ(self):
        easyT = leetCode.getTotalEasy(name=self.leetcode.strip()).strip()
        return easyT
    @property
    def MS(self):
        contrib = leetCode.getContribution(name=self.leetcode.strip())
        return contrib
    @property
    def MQ(self):
        medT = leetCode.getTotalMedium(name=self.leetcode.strip()).strip()
        mediumS = leetCode.getMediumSolved(name=self.leetcode.strip()).strip()
        return medT
    @property
    def HS(self):
        HardS = leetCode.getHardSolved(name=self.leetcode.strip()).strip()
        return HardS
    @property
    def HQ(self):
        HardT = leetCode.getTotalHard(name=self.leetcode.strip()).strip()
        return HardT
    