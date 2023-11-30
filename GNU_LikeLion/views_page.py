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
from django.shortcuts import render, get_object_or_404


def project_detail(request, project_id):
    project = get_object_or_404(Project, id=project_id)
    # Add logic to fetch additional data or perform other actions
    return render(request, 'projectDetail.html', {'project': project})
# views_page.py

from rest_framework import viewsets
from .models import Project, ProjectImage,Post,PostImage
from .serializers import ProjectSerializer, ProjectImageSerializer,PostImageSerializer,PostSerializer
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

    def perform_create(self, serializer):
        serializer.save()

class ProjectImgageViewSet(viewsets.ModelViewSet):
    # 수정: ProjectImage 모델에 대한 queryset을 가져오도록 수정
    queryset = ProjectImage.objects.all()
    serializer_class = ProjectImageSerializer

#post
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

    def perform_create(self, serializer):
        serializer.save()

class PostImgageViewSet(viewsets.ModelViewSet):
    # 수정: ProjectImage 모델에 대한 queryset을 가져오도록 수정
    queryset = PostImage.objects.all()
    serializer_class = PostImageSerializer
