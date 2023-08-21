from django.core.exceptions import ObjectDoesNotExist
from rest_framework.permissions import BasePermission
from .models import BlackToken


class ISModerator(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.moderator)


class TokenValidPermission(BasePermission):
    def has_permission(self, request, view):
        try:
            token = request.headers["Authorization"].split()[1]
            if BlackToken.objects.get(token=token):
                return False

        except ObjectDoesNotExist:
            return True

