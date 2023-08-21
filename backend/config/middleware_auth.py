from django.conf import settings
from django.conf.global_settings import SECRET_KEY

from .models import MyUser
from rest_framework import authentication, exceptions
import jwt
import datetime
from rest_framework_simplejwt.authentication import JWTAuthentication
import rest_framework_simplejwt


class CustomAuthMiddleware(authentication.BaseAuthentication):
    authentication_header_prefix = 'token'

    def authenticate(self, request, token=None, **kwargs):
        auth_header = authentication.get_authorization_header(request).split()

        if not auth_header or auth_header[0].lower() != b'token':
            return None

        if len(auth_header) == 1 or len(auth_header) > 2:
            raise exceptions.AuthenticationFailed('invalid token')

        try:
            token = auth_header[1].decode('utf-8')

        except UnicodeError:
            raise exceptions.AuthenticationFailed('invalid token space')

        return self.token_verification(token)

    def token_verification(self, token):
        try:
            print(JWTAuthentication.get_validated_token(raw_token=token))
            payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256', ])
        except jwt.PyJWTError:
            raise exceptions.AuthenticationFailed('error authentication')

        token_exp = datetime.date.fromtimestamp(payload['exp'])
        #if token_exp < datetime.datetime.utcnow():
        #    raise exceptions.AuthenticationFailed('token expired')

        try:
            user = MyUser.objects.get(id=payload['id'])
        except Exception:
            raise exceptions.AuthenticationFailed('not user')

        return user, None
