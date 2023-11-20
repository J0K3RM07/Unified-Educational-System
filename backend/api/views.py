from rest_framework import viewsets
from drf_spectacular.utils import extend_schema

from api.serializers import (
    PostSerializer,
)
from edu_sys.models import (
    Post
)


@extend_schema(tags=["Post"])
class PostViewSet(viewsets.ReadOnlyModelViewSet):
    """Publishing blog posts."""
    queryset = Post.objects.all()
    serializer_class = PostSerializer
