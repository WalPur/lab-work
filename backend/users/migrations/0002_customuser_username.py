# Generated by Django 5.0 on 2023-12-08 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='username',
            field=models.CharField(max_length=120, null=True, verbose_name='Заглушка'),
        ),
    ]
