from django.contrib import admin

# Register your models here.

# activity record 게시글
from django.utils.html import format_html
from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "content_preview", "display_image")

    def content_preview(self, obj):
        return obj.content[:50] + "..." if len(obj.content) > 50 else obj.content

    content_preview.short_description = "Content Preview"

    def display_image(self, obj):
        return (
            format_html(
                '<img src="{}" style="max-height: 50px; max-width: 50px;" />',
                obj.image.url,
            )
            if obj.image
            else None
        )

    display_image.short_description = "Image"
    