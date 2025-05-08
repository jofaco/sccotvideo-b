from django.urls import path, include
from rest_framework.routers import DefaultRouter
from apps.videos.api.viewsets.video_views import VideoRetrieveAPIView, VideoPublicViewSet

router = DefaultRouter()
router.register(r'videos/public', VideoPublicViewSet, basename='video-public')

urlpatterns = [
    path('videos/retrieve/<int:pk>', VideoRetrieveAPIView.as_view(), name='video-detail'),
    path('', include(router.urls)),  # Incluye las rutas del router
]
