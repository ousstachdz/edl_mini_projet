from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

from .models import Project, Message
from .serializers import ProjectSerializer, MessageSerializer, CustomUserSerializer


class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProjectCreate (generics.CreateAPIView):
    permission_classes = [IsAdminUser]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ProjectList (generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminUser]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class MessageCreate (generics.CreateAPIView):
    permission_classes = [AllowAny]
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class MessageList(generics.ListAPIView):
    permission_classes = [IsAdminUser]
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class MessageDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAdminUser]
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
