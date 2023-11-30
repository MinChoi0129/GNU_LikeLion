from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views_page

# viewset은 router를 사용하여 URL을 관리
router = DefaultRouter()
router.register(r'projects', views_page.ProjectViewSet, basename='project')
router.register(r'project-images', views_page.ProjectImgageViewSet, basename='projectimage')
router.register(r'posts', views_page.PostViewSet, basename='post')
router.register(r'post-images', views_page.PostImgageViewSet, basename='postimage')


urlpatterns = [
    path('', include(router.urls)),
    # 다른 필요한 URL 패턴들을 여기에 추가할 수 있습니다.
]