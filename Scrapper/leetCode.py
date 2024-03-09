from bs4 import BeautifulSoup
import requests
import json
url = 'https://leetcode.com/danielprinceD/'

def getStatus(name):
    getreq = requests.get(url + name)
    return json.loads(BeautifulSoup( getreq.content, 'lxml').text)['status']

def getContribution(name):
    getreq = requests.get(url + name)
    return json.loads(BeautifulSoup( getreq.content, 'lxml').text)['contributionPoints']
def getRanking(name):
    getreq = requests.get(url + name)
    return json.loads(BeautifulSoup( getreq.content, 'lxml').text)['ranking']
def getTotalSolved(name):
    getreq = requests.get(url + name)
    return json.loads(BeautifulSoup( getreq.content, 'lxml').text)['totalSolved']
def getTotalQuestions(name):
    getreq = requests.get(url + name)
    return json.loads(BeautifulSoup( getreq.content, 'lxml').text)['totalQuestions']

def getEasySolved(name):
    getreq = requests.get(url + name)
    return json.loads(BeautifulSoup( getreq.content, 'lxml').text)['easySolved']

def getTotalEasy(name):
    getreq = requests.get(url)
    return getreq.status_code
    BeautifulSoup(getreq.content , 'lxml').find('span' , classs='text-xs')


def getMediumSolved(name):
    getreq = requests.get(url + name)
    return json.loads(BeautifulSoup( getreq.content, 'lxml').text)['mediumSolved']
def getTotalMedium(name):
    getreq = requests.get(url + name)
    return json.loads(BeautifulSoup( getreq.content, 'lxml').text)['totalMedium']
def getHardSolved(name):
    getreq = requests.get(url + name)
    return json.loads(BeautifulSoup( getreq.content, 'lxml').text)['hardSolved']
def getTotalHard(name):
    getreq = requests.get(url + name)
    return json.loads(BeautifulSoup( getreq.content, 'lxml').text)['totalHard']
