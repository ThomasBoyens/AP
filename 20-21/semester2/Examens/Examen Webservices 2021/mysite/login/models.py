from django.db import models

class User(models.Model):
    user_email = models.CharField(max_length=40)
    user_password = models.CharField(max_length=15)
