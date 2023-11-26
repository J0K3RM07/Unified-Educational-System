from django.urls import include, path
from rest_framework.routers import DefaultRouter

from api.views import *

app_name = "api"

router = DefaultRouter()
router.register(r"posts", PostViewSet, basename="posts")
router.register(r"institution", InstitutionViewSet, basename="institution")
router.register(r"faculty", FacultyViewSet, basename="faculty")
router.register(r"group", GroupViewSet, basename="group")
router.register(r"subject", SubjectViewSet, basename="subject")
router.register(r"lesson", LessonViewSet, basename="lesson")
router.register(r"rating", RatingViewSet, basename="rating")

urlpatterns = [
    path("v1/", include(router.urls)),
    path("v1/auth/", include("djoser.urls.authtoken")),
]
