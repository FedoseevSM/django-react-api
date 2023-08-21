from django.http import JsonResponse
from rest_framework import permissions, status, viewsets
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from .models import MyUser, BlackToken
from .serializer import SerializerUser
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
import jwt
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from .custom_permissions import ISModerator, TokenValidPermission


class UserList(viewsets.ModelViewSet):
    model = MyUser
    serializer_class = SerializerUser
    queryset = MyUser.objects.all()

    def destroy(self, request, pk=None):
        self.model.objects.get(pk=pk).delete()
        return JsonResponse({'user': 'delete'})

    def update(self, request, pk=None):
        user = self.request.user
        user_request = self.get_object()
        if user == user_request:
            serializer = self.serializer_class(data=request.data)
            serializer.is_valid()
            serializer.update(instance=self.queryset.get(pk=pk), validated_data=serializer.data)
            return JsonResponse({'user': f'{self.queryset.get(pk=pk)}'})
        return JsonResponse({'user': 'NO update'})

    def list(self, request):
        serializer = self.serializer_class(instance=self.queryset, many=True)
        print(type(serializer.data))
        return JsonResponse(serializer.data, safe=False)

    def get_permissions(self):

        if self.action == 'destroy':
            permission_classes = [permissions.IsAuthenticated, ISModerator, TokenValidPermission]
        elif self.action == 'update':
            permission_classes = [permissions.IsAuthenticated, TokenValidPermission]
        else:
            permission_classes = [permissions.AllowAny, TokenValidPermission]

        return [permission() for permission in permission_classes]

    #def get_queryset(self):
    #    return self.request.user

    #def get_object(self):
    #    return self.get_queryset()


class UserRegister(APIView):
    def post(self, request):
        request.data['password'] = make_password(password=request.data['password'])
        serializer = SerializerUser(data=request.data)
        serializer.is_valid()
        serializer.save()
        return Response(serializer.data)


class UserLogin(APIView):
    def post(self, request):
        username = request.data['username']
        email = request.data['email']
        password = request.data['password']

        user = MyUser.objects.filter(email=email, username=username).first()
        if user is None:
            raise AuthenticationFailed('user not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password! ')

        refresh = RefreshToken.for_user(user)

        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
                })

        #payload = {
        #    'id': user.id,
        #    'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
        #    'iat': datetime.datetime.utcnow()
        #}
        #token = jwt.encode(payload, 'secret', algorithm='HS256')
        #3print(user.id)
        #response = Response()
        #response.set_cookie(key='jwt', value=token, httponly=True)
        #response.data = {
        #    'jwt': token,

        #}


class UserView(APIView):
    permission_classes = permissions.IsAuthenticated

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('not authenticated 1')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256', ])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('not authenticated 2')

        user = MyUser.objects.filter(id=payload['id']).first()
        serializer = SerializerUser(user)

        return Response(serializer.data)


class LogoutView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        try:
            token = request.headers["Authorization"].split()[1]
            BlackToken(token=token).save()
            RefreshToken(request.data["refresh"]).blacklist()
            return JsonResponse({'user': 'logout'})
        except Exception as e:
                return Response(status=status.HTTP_400_BAD_REQUEST)

#    def post(self, request):
#        try:
#            print(request.data["refresh"])
#
#
#            return JsonResponse({'user': 'logout'})
#        except Exception as e:
#            return Response(status=status.HTTP_400_BAD_REQUEST)
