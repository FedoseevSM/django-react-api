from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from rest_framework import routers

from config import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', views.UserRegister.as_view()), # Регистрация пользователя
    #path('api/testing/', views.UserList.as_view({'get': 'list', 'put': 'update', })), # проверка авторизации по токену
    path('login/', TokenObtainPairView.as_view()), #получить пару refresh, access
    path('refresh/', TokenRefreshView.as_view()),#получить новый токен по refresh token
    path('logout/', views.LogoutView.as_view()), # Разлогиниться
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

]

router = routers.SimpleRouter()
router.register(r'user', views.UserList, basename='user')
urlpatterns += router.urls
