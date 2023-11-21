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
    """Publishing blog posts."""
    queryset = Institution.objects.all()
    serializer_class = InstitutionSerializer


@extend_schema(tags=["Faculty"])
class FacultyViewSet(viewsets.ModelViewSet):
    """Publishing blog posts."""
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
