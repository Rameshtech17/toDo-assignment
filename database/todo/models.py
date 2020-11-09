from django.db import models

# Create your models here.
class Text(models.Model):
    text = models.CharField(max_length=100)
    # status = models.BooleanField()
    completed= models.CharField(max_length=100)

    def __str__(self):
        return self.text

class toDoText(models.Model):
    text = models.CharField(max_length=100)
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.text


