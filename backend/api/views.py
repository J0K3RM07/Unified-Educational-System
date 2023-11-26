from rest_framework import viewsets
from drf_spectacular.utils import extend_schema

from api.serializers import (
    PostSerializer,
    InstitutionSerializer,
    FacultySerializer,
    GroupSerializer,
    SubjectSerializer,
    LessonSerializer,
    RatingSerializer
)
from edu_sys.models import *


@extend_schema(tags=["Post"])
class PostViewSet(viewsets.ModelViewSet):
    """Publishing blog posts."""
    queryset = Post.objects.all()
    serializer_class = PostSerializer


@extend_schema(tags=["Institution"])
class InstitutionViewSet(viewsets.ModelViewSet):
    queryset = Institution.objects.all()
    serializer_class = InstitutionSerializer


@extend_schema(tags=["Faculty"])
class FacultyViewSet(viewsets.ModelViewSet):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer


@extend_schema(tags=["Group"])
class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


@extend_schema(tags=["Subject"])
class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer


@extend_schema(tags=["Lesson"])
class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


@extend_schema(tags=["Rating"])
class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
