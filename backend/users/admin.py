from django.contrib import admin
from django.contrib.auth.admin import UserAdmin


from users.models import CustomUser


@admin.register(CustomUser)
class UserAdmin(UserAdmin):
    list_display = ["email", "first_name", "last_name"]
    search_fields = ["email"]
