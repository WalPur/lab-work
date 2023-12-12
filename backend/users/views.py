from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserRegistrationSerializer
from .models import CustomUser
from .managers import CustomUserManager


class UserRegistrationView(GenericAPIView):
    serializer_class = UserRegistrationSerializer
    queryset = CustomUser.objects.all()

    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            CustomUser.objects.create_user(
                email=serializer.data["username"],
                **serializer.data,
            )
            return Response("Пользователь создан", status.HTTP_201_CREATED)
        return Response(
            {"message": "FAlSE", "errors": serializer.errors},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )
