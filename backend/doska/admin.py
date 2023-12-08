from django.contrib import admin

from doska.models import Lot


@admin.register(Lot)
class LogAdmin(admin.ModelAdmin):
    list_display = ["name", "author"]
