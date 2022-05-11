from rest_framework import serializers

from .models import Project, Message, User


class CustomUserSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)
    user_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = ('email', 'user_name', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class ProjectSerializer (serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


class MessageSerializer (serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = '__all__'
