# Generated by Django 5.0.4 on 2024-04-21 09:02

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("chatbot_app", "0005_alter_chat_name"),
    ]

    operations = [
        migrations.AddField(
            model_name="chat",
            name="created_at",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="chat",
            name="name",
            field=models.TextField(),
        ),
    ]