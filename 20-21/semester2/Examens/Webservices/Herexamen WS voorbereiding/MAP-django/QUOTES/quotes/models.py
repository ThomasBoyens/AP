from django.db import models

class Author(models.Model):
    author_name = models.CharField(max_length=50)
    author_bio = models.CharField(max_length=300, default=None)

    def __str__(self):
        return self.author_name

class Quote(models.Model):
    quote_text = models.CharField(max_length=200)
    quote_author = models.ForeignKey(Author, on_delete=models.CASCADE, default=None)

def __str__(self):
	return self.quote_text

def search_quote(self, word):
	return True if word in self.quote_text.split() else False