from django.contrib import admin
<<<<<<< HEAD

# Register your models here.
=======
from django.db import models
from martor.widgets import AdminMartorWidget

from edu_sys.models import *


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': AdminMartorWidget},
    }
    list_display = (
        "title",
        "pub_date",
    )
    list_filter = ("pub_date",)
    prepopulated_fields = {"url": ("title",)}


@admin.register(Institution)
class InstitutionAdmin(admin.ModelAdmin):
    list_display = (
        "name",
    )


@admin.register(Faculty)
class FacultyAdmin(admin.ModelAdmin):
    list_display = (
        "name",
    )


@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    list_display = (
        "name",
    )


@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = (
        "name",
    )


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        "username",
        "role",
    )
    list_filter = ("role",)
>>>>>>> develop
