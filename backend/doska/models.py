from django.db import models


class Category(models.Model):
    name = models.CharField("Название категории", max_length=120)


class Lot(models.Model):
    name = models.CharField("Название объявления", max_length=120)
    description = models.TextField("Описание объявления")
    author = models.ForeignKey("users.CustomUser", models.CASCADE, related_name="lots")
    categories = models.ManyToManyField(Category, null=True, blank=True)
    date_added = models.DateTimeField("Дата добавления", auto_now_add=True, null=True)
    date_edited = models.DateTimeField(
        "Дата последнего редактирования", auto_now=True, null=True
    )
