from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser, PermissionsMixin
from phonenumber_field.modelfields import PhoneNumberField
from martor.models import MartorField


class User(AbstractUser, PermissionsMixin):
    name = models.CharField(verbose_name='Имя', max_length=25)
    surname = models.CharField(verbose_name='Фамилия', max_length=25)
    patronymic = models.CharField(verbose_name='Отчество', blank=True, max_length=25, null=True)
    age = models.CharField(verbose_name='Возраст', max_length=3, blank=True, null=True)
    phone_number = PhoneNumberField(blank=True, null=True)
    about = models.CharField(verbose_name="О себе", blank=True, null=True, max_length=500)
    achievement = models.ForeignKey('Achievement', on_delete=models.RESTRICT, blank=True, null=True)
    institution = models.ForeignKey("Institution", on_delete=models.RESTRICT, blank=True, null=True)
    parent = models.ManyToManyField("Parent", blank=True, default=None)
    subject = models.ForeignKey("Subject", on_delete=models.RESTRICT)
    lesson = models.ForeignKey("Lesson", on_delete=models.RESTRICT)
    post = models.ForeignKey("Post", on_delete=models.RESTRICT, blank=True)
    role = models.CharField(max_length=100)

    def __str__(self):
        return self.username


class Achievement(models.Model):
    name = models.TextField()
    description = models.CharField(
        verbose_name='Описание',
        blank=True,
        null=True,
        max_length=5000
    )
    date = models.DateTimeField('Дата', auto_now_add=True)


class Lesson(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateTimeField('Дата', auto_now_add=True)
    classroom = models.CharField(verbose_name='Аудитория', max_length=10)
    rating = models.ForeignKey("Rating", on_delete=models.RESTRICT)


class Rating(models.Model):
    rating = models.CharField(verbose_name='Оценка', max_length=3)
    date = models.DateTimeField(verbose_name='Дата', auto_now_add=True)
    teacher = models.OneToOneField("Teacher", on_delete=models.RESTRICT)


class Institution(models.Model):
    name = models.CharField(verbose_name='Название', max_length=300)
    description = models.CharField(
        max_length=500,
        verbose_name='Описание',
        blank=True,
        null=True
    )
    faculty = models.ForeignKey("Faculty", on_delete=models.RESTRICT)


class Faculty(models.Model):
    name = models.CharField(verbose_name='Название', max_length=300)
    group = models.ForeignKey("Group", on_delete=models.RESTRICT)


class Group(models.Model):
    name = models.CharField(verbose_name='Название', max_length=300)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    subject = models.ForeignKey("Subject", on_delete=models.RESTRICT)


class Subject(models.Model):
    name = models.CharField(verbose_name='Название', max_length=300)
    date = models.DurationField()
    time = models.IntegerField()  # колво часов
    lesson = models.ForeignKey("Lesson", on_delete=models.RESTRICT)  # Так это и есть урок не ?


class Post(models.Model):
    pub_date = models.DateTimeField('Дата', auto_now_add=True)
    url = models.SlugField(verbose_name='Url', max_length=100)
    title = models.CharField(verbose_name='Название', max_length=250)
    image = models.ImageField(
        'Ссылка на картинку на сайте',
        upload_to='blog/images/',
        blank=True,
        null=True,
    )
    text = models.CharField(verbose_name='Текст', max_length=500)
