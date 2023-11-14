from django.shortcuts import render

# Create your views here.
def main(request):
    return render(request, "main.html")

def projectDetail(request):
    return render(request,"projectDetail.html")

def project(request):
    return render(request, "project.html")