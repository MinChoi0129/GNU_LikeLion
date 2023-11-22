"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from GNU_LikeLion import views_page
from GNU_LikeLion.views_page import post_list

urlpatterns = [
    path("", views_page.main, name="main"),
    path("admin/", admin.site.urls),
    path("introduce/", views_page.introduce, name="introduce"),
    path("project/", views_page.project, name="project"),
    path("activity/", views_page.activity, name="activity"),
    path("mainTest/", views_page.mainTest, name="mainTest"),
    path("project/", views_page.project, name="project"),
    path("planPage/", views_page.planPage, name="planPage"),
    path("projectDetail/", views_page.projectDetail, name="projectDetail"),
    path("FAQ/", views_page.FAQ, name="FAQ"),
    path("introduce/", views_page.introduce, name="introduce"),
    path("background/", views_page.background, name="background"),
]
