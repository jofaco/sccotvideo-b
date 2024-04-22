from django.urls import path
from apps.videos.api.viewsets.video_views import   VideoRetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from apps.videos.api.views import HolaMundoAPIView
urlpatterns = [
    path('videos/retrieve/<int:pk>', VideoRetrieveAPIView.as_view(), name = 'video-detail'),
    path('hola-mundo/', HolaMundoAPIView.as_view(), name='hola_mundo'),
]