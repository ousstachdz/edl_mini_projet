from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,

    TokenObtainSlidingView,
    TokenRefreshSlidingView,
)

urlpatterns = [
    
    path('admin/', admin.site.urls),

    path('api/', include('api.urls')),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/Stoken/', TokenObtainSlidingView.as_view(), name='token_obtain_pair'),
    path('api/Stoken/refresh/', TokenRefreshSlidingView.as_view(), name='token_refresh'),
]
