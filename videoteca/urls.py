from django.contrib import admin
from django.urls import path,include,re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve

from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.views.generic import TemplateView 

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

schema_view = get_schema_view(
   openapi.Info(
      title="Videoteca API",
      default_version='v1.0',
      description="Documentación pública de Biblioteca de videos SCCOT",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="desarrollador.web@sccot.org.co"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
   #permission_classes=[permissions.IsAdminUser],

)

urlpatterns = [
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^loginuser/', TemplateView.as_view(template_name='index.html')),
    re_path(r'^logout/', TemplateView.as_view(template_name='index.html')),
    re_path(r'^seeVideo/', TemplateView.as_view(template_name='index.html')),
    re_path(r'^seeWebinar/', TemplateView.as_view(template_name='index.html')),
    re_path(r'^seeTemporada/', TemplateView.as_view(template_name='index.html')),
    re_path(r'^VideoForm/', TemplateView.as_view(template_name='index.html')),
    re_path(r'^updateVideo/', TemplateView.as_view(template_name='index.html')),
    re_path(r'^seeSerie/', TemplateView.as_view(template_name='index.html')),
    re_path(r'^Series/', TemplateView.as_view(template_name='index.html')),
    re_path(r'^Videos/', TemplateView.as_view(template_name='index.html')),
    re_path(r'^Casos/', TemplateView.as_view(template_name='index.html')),
    re_path(r'^Perfil/', TemplateView.as_view(template_name='index.html')),
    re_path(r'^free/', TemplateView.as_view(template_name='index.html')),
    re_path(r'^Ajustes/', TemplateView.as_view(template_name='index.html')),
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('admin/', admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include('apps.users.api.urls')),
    path('accounts/', include('allauth.urls')),
    path('api/', include('apps.videos.api.urls')),
    path('api/',include('apps.videos.api.routers')),
    path('api/',include('apps.users.api.routers')),
    path('api/',include('apps.location.api.routers')),
    path('api/',include('apps.notifications.api.routers')),
    path('api/',include('apps.series.api.routers')),
    path('',TemplateView.as_view(template_name='index.html'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
