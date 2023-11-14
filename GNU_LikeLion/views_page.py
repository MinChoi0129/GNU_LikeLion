from django.shortcuts import render
from .models import Post

# Create your views here.
def main(request):
    return render(request, "main.html")

def project(request):
    return render(request, "project.html")

def activity(request):
    return render(request, "activity.html")

# activity record 게시글
def post_list(request):
    posts = Post.objects.all()
    return render(request, 'post_list.html', {'posts': posts})