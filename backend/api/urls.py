from django.urls import include, path
from rest_framework.routers import DefaultRouter

from api.views import PostViewSet

app_name = "api"

router = DefaultRouter()
router.register(r"posts", PostViewSet, basename="posts")

urlpatterns = [
    path("v1/", include(router.urls)),
    path("v1/auth/", include("djoser.urls.authtoken")),
]
