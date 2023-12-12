from django.urls import path
from rest_framework.authtoken import views

from users.views import UserRegistrationView

urlpatterns = [
    path("auth/", views.obtain_auth_token),
    path("register/", UserRegistrationView.as_view()),
]
