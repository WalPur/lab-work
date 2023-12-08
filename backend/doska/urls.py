from rest_framework.routers import DefaultRouter

from doska.views import LotViewset


router = DefaultRouter()
router.register("", LotViewset)


urlpatterns = [] + router.urls
