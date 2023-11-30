from django.contrib import admin

# Register your models here.

# activity record 게시글
from django.utils.html import format_html
from .models import Post, ProjectImage,Project,PostImage



  
# Photo 클래스를 inline으로 나타낸다.
class ProjectImageInline(admin.TabularInline):
    model = ProjectImage    

# Post 클래스는 해당하는 Photo 객체를 리스트로 관리하는 한다. 
class ProjectAdmin(admin.ModelAdmin):
    inlines = [ProjectImageInline,]

# Register your models here.
admin.site.register(Project, ProjectAdmin)


# Photo 클래스를 inline으로 나타낸다.
class PostImageInline(admin.TabularInline):
    model = PostImage    

# Post 클래스는 해당하는 Photo 객체를 리스트로 관리하는 한다. 
class PostAdmin(admin.ModelAdmin):
    inlines = [PostImageInline,]

# Register your models here.
admin.site.register(Post, PostAdmin)