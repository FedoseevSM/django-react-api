from rest_framework import serializers
from .models import MyUser


class SerializerUser(serializers.ModelSerializer):

    class Meta:
        model = MyUser
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

