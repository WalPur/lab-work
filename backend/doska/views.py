from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import (
    CreateModelMixin,
    RetrieveModelMixin,
    ListModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
)
from rest_framework import permissions
from doska.models import Lot

from doska.serializers import LotSerializer


class LotViewset(
    GenericViewSet,
    CreateModelMixin,
    RetrieveModelMixin,
    ListModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
):
    serializer_class = LotSerializer
    queryset = Lot.objects.filter(is_active=True)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
