# Generated by Django 4.0.4 on 2022-05-25 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meeting', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='meeting',
            name='attend',
            field=models.BooleanField(default=False),
        ),
    ]
