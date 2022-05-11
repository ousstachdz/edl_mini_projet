from django.urls import path

from . import views

urlpatterns = [
    path('create/', views.CustomUserCreate.as_view()),

    path('messages/', views.MessageList.as_view()),
    path('message/create', views.MessageCreate.as_view()),
    path('message/<str:pk>', views.MessageDetail.as_view()),

    path('projects/', views.ProjectList.as_view()),
    path('project/create', views.ProjectCreate.as_view()),
    path('project/<str:pk>', views.MessageDetail.as_view()),
]
