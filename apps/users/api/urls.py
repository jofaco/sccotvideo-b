from django.urls import path
#from apps.users.api.viewset import  user_api_view, user_detail_api_view
from apps.users.views import  logout, login,holaMundo
from django.views.generic import TemplateView 

urlpatterns = [
    #path('users/', user_api_view, name='user_api'),
    path('login/', login.as_view(), name='login'),
    path('logout/', logout.as_view(), name='logout'),
     path('app/',TemplateView.as_view(template_name='../../../build/index.html')),
    path("saludo/", holaMundo, name="saludo"),
    #path('refresh-token/', userToken.as_view(), name='refresh_token'),
    #path('users/<int:pk>/', user_detail_api_view, name='user_detail_api_view')
]