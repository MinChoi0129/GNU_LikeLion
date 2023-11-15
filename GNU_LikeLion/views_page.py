from django.shortcuts import render
from .models import Post

# Create your views here.
def main(request):
    return render(request, "main.html")

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


# # projectDetail 사진리스트 미리 렌더링
# def projectDetailPhotoList(request):
#     image_list = [
#         "{% static 'image/exImg1.png'%}",
#         "{% static 'image/exImg2.png'%}",
#         "{% static 'image/exImg3.png'%}",
#         "{% static 'image/exImg4.png'%}",
#     ]
#     return render(request,"projectDetail.html",{'image_list':image_list})