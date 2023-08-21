from datetime import datetime

from django.db import models
from django.contrib.auth.models import User, AbstractUser
from django.conf import settings
from rest_framework import authentication, exceptions


class MyUser(AbstractUser):
    REQUIRED_FIELDS = ["email"]
    moderator = models.BooleanField(default=False)

    def __str__(self):
        return self.username


class BlackToken(models.Model):
    token = models.CharField(max_length=700)

    def __str__(self):
        return self.token
