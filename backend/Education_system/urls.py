
from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import *

urlpatterns = [
    path("api/", include("api.urls")),
    path("admin/", admin.site.urls),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path('martor/', include('martor.urls')),
    path(
        "api/docs/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="docs",
    ),
    path("api/redoc/", SpectacularRedocView.as_view(url_name="schema"), name="redoc"),
]
