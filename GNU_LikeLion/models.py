from django.db import models

# Create your models here.


# activity record 게시글
class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.title
class PostImage(models.Model):
    post = models.ForeignKey(Post,on_delete=models.CASCADE)
    image = models.ImageField( null =True,blank=True,upload_to="project_images/")


   

class Project(models.Model):
    subject = models.CharField(max_length=500)
    title = models.CharField(max_length=500)
    #explain은 간단설명?한줄설명용
    explain =  models.CharField(max_length=500)
    #기수
    generation = models.IntegerField(default=11)
    def __str__(self):
     return self.title

class ProjectImage(models.Model):
    project = models.ForeignKey(Project,on_delete=models.CASCADE)
    image = models.ImageField( null =True,blank=True,upload_to="project_images/")