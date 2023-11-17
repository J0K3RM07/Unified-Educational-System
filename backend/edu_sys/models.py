from django.db import models
from django.contrib.auth import get_user_model

from martor.models import MartorField

User = get_user_model()


class Achievement(models.Model):
    name = models.CharField()
    description = MartorField(
        'Описание',
        blank=True,
        null=True,
        max_length=5000
    )
    date = models.DateTimeField('Дата', auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class Lesson(models.Model):
    date = models.DateTimeField('Дата', auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    classroom = models.CharField('Аудитория', max_length=10)


class Rating(models.Model):
    rating = models.CharField('Оценка', max_length=3)
    color = models.CharField('Цвет в HEX', max_length=7, unique=True)
    date = models.DateTimeField('Дата', auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)


class Institution(models.Model):
    name = models.CharField('Название', max_length=300)
    description = MartorField(
        'Описание',
        blank=True,
        null=True
    )


class Faculty(models.Model):
    name = models.CharField('Название', max_length=300)
    institution = models.ForeignKey(Institution, on_delete=models.CASCADE)


class Group(models.Model):
    name = models.CharField('Название', max_length=300)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE)


class Subject(models.Model):
    name = models.CharField('Название', max_length=300)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Group, on_delete=models.CASCADE)
    rating = models.ForeignKey(Rating, on_delete=models.CASCADE)


class Post(models.Model):
    pub_date = models.DateTimeField('Дата', auto_now_add=True)
    url = models.SlugField('Url', max_length=100)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField('Название', max_length=250)
    image = models.ImageField(
        'Ссылка на картинку на сайте',
        upload_to='blog/images/',
        blank=True,
        null=True,
    )
    text = MartorField('Текст')
