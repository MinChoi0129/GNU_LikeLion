from django.shortcuts import render
from .models import Post

# Create your views here.
def main(request):
    return render(request, "main.html")

<<<<<<< HEAD
def introduce(request):
    return render(request, "introduce.html")
=======
def projectDetail(request):
    return render(request,"projectDetail.html")

def project(request):
    return render(request, "project.html")
def main_test(request):
    return render(request, "main_test.html")

def activity(request):
    return render(request, "activity.html")

# activity record 게시글
def post_list(request):
    posts = Post.objects.all()
    return render(request, 'activity.html', {'posts': posts})
>>>>>>> e4f3dc1fb43890591b330458479b78ae1d9320f8
