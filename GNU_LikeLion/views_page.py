from django.shortcuts import render

# Create your views here.
def main(request):
    return render(request, "main.html")

def main_test(request):
    return render(request, "main_test.html")