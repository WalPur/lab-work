from django.contrib import admin
from doska.models import Category, Lot


@admin.register(Lot)
class LogAdmin(admin.ModelAdmin):
    list_display = ["name", "author"]


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["name"]
