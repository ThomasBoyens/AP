# Generated by Django 3.1.7 on 2021-08-13 14:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quotes', '0005_quote_quote_author'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='quote',
            name='quote_author',
        ),
    ]