# serializers.py

from rest_framework import serializers
from .models import Project, ProjectImage,Post,PostImage

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['image']

class ProjectSerializer(serializers.ModelSerializer):
    # 수정: ProjectImageSerializer를 ProjectImage 모델의 관계에 대해 many=True로 사용
    images = ProjectImageSerializer(many=True, read_only=True, source='projectimage_set')

    class Meta:
        model = Project
        fields = ['id', 'subject', 'title', 'explain', 'generation', 'images']


class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostImage
        fields = ['image']

class PostSerializer(serializers.ModelSerializer):
    # 수정: ProjectImageSerializer를 ProjectImage 모델의 관계에 대해 many=True로 사용
    images = PostImageSerializer(many=True, read_only=True, source='postimage_set')

    class Meta:
        model = Post
        fields = ['id','title', 'content', 'images']
