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
from django.urls import path,include
from GNU_LikeLion import views_page
from django.conf.urls.static import static
from . import settings

urlpatterns = [
    path("", views_page.main, name="main"),
    path("admin/", admin.site.urls),
    path("api/",include('GNU_LikeLion.urls')),
    path("activity/", views_page.post_list, name="post_list"),
    path("mainTest/", views_page.mainTest, name="mainTest"),
    path("project/", views_page.project, name="project"),
    path("planpage/", views_page.planpage, name="planpage"),
    path("projectDetail/", views_page.projectDetail, name="projectDetail"),
    path("FAQ/", views_page.FAQ, name="FAQ"),
    path("introduce/", views_page.introduce, name="introduce"),
    path("activityDetail1/", views_page.activityDetail1, name="activityDetail1"),
    path("activityDetail2/", views_page.activityDetail2, name="activityDetail2"),
    path("activityDetail3/", views_page.activityDetail3, name="activityDetail3"),
    path("activityDetail4/", views_page.activityDetail4, name="activityDetail4"),
    path("background/", views_page.background, name="background"),
    path('project/<int:project_id>/', views_page.project_detail, name='projectDetail'),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)