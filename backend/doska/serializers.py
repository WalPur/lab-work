from doska.models import Category, Lot
from rest_framework import serializers
from users.serializers import UserSerializer


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class LotSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    categories_display = serializers.SerializerMethodField()

    class Meta:
        model = Lot
        fields = [
            "id",
            "author",
            "name",
            "description",
            "date_added",
            "date_edited",
            "is_active",
            "categories",
            "categories_display",
            "image",
        ]

    def get_categories_display(self, instance):
        return CategorySerializer(instance.categories, many=True).data

    def create(self, validated_data):
        validated_data["author"] = self.context["request"].user
        return super().create(validated_data)
