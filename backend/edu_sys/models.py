from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from phonenumber_field.modelfields import PhoneNumberField
from martor.models import MartorField


class User(AbstractUser, PermissionsMixin):
    USER_ROLES = [
        ('student', 'student'),
        ('teacher', 'teacher'),
        ('parent', 'parent'),
        ('admin', 'admin'),
    ]

    profile_pic = models.ImageField(
        verbose_name='Picture',
        upload_to='user/images/',
        blank=True,
        null=True,
    )
    patronymic = models.CharField(verbose_name='Patronymic', blank=True, max_length=25, null=True)
    age = models.CharField(verbose_name='Age', max_length=3, blank=True, null=True)
    phone_number = PhoneNumberField(blank=True, null=True)
    about = MartorField(verbose_name='About', blank=True, null=True)
    achievement = models.ForeignKey('Achievement', on_delete=models.RESTRICT, blank=True, null=True)
    institution = models.ForeignKey("Institution", on_delete=models.RESTRICT, blank=True, null=True)
    subject = models.ForeignKey("Subject", on_delete=models.RESTRICT, blank=True, null=True)
    lesson = models.ForeignKey("Lesson", on_delete=models.RESTRICT, blank=True, null=True)
    post = models.ForeignKey("Post", on_delete=models.RESTRICT, blank=True, null=True)
    role = models.CharField(
        verbose_name='Роль',
        max_length=15,
        choices=USER_ROLES,
        default='student',
    )

    def __str__(self):
        return self.username

    @property
    def is_teacher(self):
        return self.role == 'teacher'

    @property
    def is_parent(self):
        return self.role == 'parent'

    @property
    def is_admin(self):
        return self.role == 'admin'


class Achievement(models.Model):
    name = models.TextField()
    description = MartorField(
        verbose_name='Description',
        blank=True,
        null=True,
        max_length=5000
    )
    date = models.DateTimeField('Date', auto_now_add=True)


class Lesson(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateTimeField('Date', auto_now_add=True)
    classroom = models.CharField(verbose_name='Classroom', max_length=10)
    rating = models.ForeignKey("Rating", on_delete=models.RESTRICT)


class Rating(models.Model):
    rating = models.CharField(verbose_name='Rating', max_length=3)
    date = models.DateTimeField(verbose_name='Date', auto_now_add=True)
    teacher = models.OneToOneField("User", on_delete=models.RESTRICT)


class Institution(models.Model):
    name = models.CharField(verbose_name='Name', max_length=300)
    description = MartorField(
        verbose_name='Description',
        blank=True,
        null=True
    )
    faculty = models.ForeignKey("Faculty", on_delete=models.RESTRICT)


class Faculty(models.Model):
    name = models.CharField(verbose_name='Name', max_length=300)
    group = models.ForeignKey("Group", on_delete=models.RESTRICT)


class Group(models.Model):
    name = models.CharField(verbose_name='Name', max_length=300)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    subject = models.ForeignKey("Subject", on_delete=models.RESTRICT)


class Subject(models.Model):
    name = models.CharField(verbose_name='Name', max_length=300)
    date = models.DurationField()
    time = models.IntegerField() #колво часов
    lesson = models.ForeignKey("Lesson", on_delete=models.RESTRICT)


class Post(models.Model):
    pub_date = models.DateTimeField('Date', auto_now_add=True)
    url = models.SlugField(verbose_name='Url', max_length=100)
    title = models.CharField(verbose_name='Title', max_length=250)
    image = models.ImageField(
        verbose_name='Link to the picture',
        upload_to='blog/images/',
        blank=True,
        null=True,
    )
    text = MartorField(verbose_name='Text')
