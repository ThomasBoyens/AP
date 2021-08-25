from django.db import models

class User(models.Model):
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.email
