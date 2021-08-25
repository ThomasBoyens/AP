from django.db import models

# Create your models here.
class User(models.Model):
    user_email = models.CharField(max_length=50)
    user_password = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.user_email
