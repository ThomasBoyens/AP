# Generated by Django 3.1.7 on 2021-08-10 15:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quotes', '0002_quote'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Actor',
            new_name='Author',
        ),
        migrations.RenameField(
            model_name='author',
            old_name='actor_name',
            new_name='author_name',
        ),
    ]
