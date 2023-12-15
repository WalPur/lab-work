from doska.models import Lot
from doska.serializers import LotSerializer
from rest_framework import permissions
from rest_framework.mixins import (
    CreateModelMixin,
    DestroyModelMixin,
    ListModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
)
from rest_framework.viewsets import GenericViewSet


class LotViewset(
    GenericViewSet,
    CreateModelMixin,
    RetrieveModelMixin,
    ListModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
):
    serializer_class = LotSerializer
    queryset = Lot.objects.filter(is_active=True).order_by("-date_added")
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
