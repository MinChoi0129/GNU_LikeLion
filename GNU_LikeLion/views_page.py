from django.shortcuts import render
from .models import Post


# Create your views here.
def main(request):
    return render(request, "main.html")


def planpage(request):
    return render(request, "planpage.html")



def projectDetail(request):
    return render(request, "projectDetail.html")


def project(request):
    return render(request, "project.html")


def mainTest(request):
    return render(request, "mainTest.html")


# def activity(request):
#     return render(request, "activity.html")

def introduce(request):
    return render(request, "introduce.html")


# activity 페이지 POSTS
def post_list(request):
    posts = Post.objects.all()
    return render(request, "activity.html", {"posts": posts})


def projectDetail(request):
    return render(request, "projectDetail.html")


def FAQ(request):
    return render(request, "FAQ.html")

def activityDetail1(request):
    return render(request, "activityDetail1.html") 

def background(request):
    return render(request, "background.html")

def profile(request):
    return render(request, "profile.html")
def activityDetail2(request):
    return render(request, "activityDetail2.html") 

def activityDetail3(request):
    return render(request, "activityDetail3.html") 

def activityDetail4(request):
    return render(request, "activityDetail4.html")    

def background(request):
    return render(request, 'background.html')
