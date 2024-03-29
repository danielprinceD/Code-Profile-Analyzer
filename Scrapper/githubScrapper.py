import requests
import json
import os
from pathlib import Path
from bs4 import BeautifulSoup
url = 'https://github.com/'
def GitChecker(name):
    getUrl = requests.get(url+ name)
    return getUrl.status_code

def getContribution(name):
    req = requests.get(url + name)
    text = BeautifulSoup(req.content , 'lxml') 
    contribution = text.find('h2' , class_='f4 text-normal mb-2').text
    return contribution.replace('\n', '').strip().split(' ')[0]
    
def getProfile(name):
    url = 'https://api.github.com/users/'
    req = requests.get( url + name).text
    data = json.loads(req)
    if 'avatar_url' not in data:
        return "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
    return data['avatar_url']

def getSteak(name):
    return 'https://streak-stats.demolab.com?user='+ name + '&locale=en&mode=daily&hide_border=false&border_radius=5'    
    
def getGraph(name):
    return 'https://github-readme-activity-graph.vercel.app/graph?username='+name
def getProgram(name):
    return 'https://github-readme-stats.vercel.app/api/top-langs?username='+name + '&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&hide_border=false'