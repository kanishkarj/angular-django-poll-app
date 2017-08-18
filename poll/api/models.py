import datetime
from django.utils import timezone
from django.db import models

class Question(models.Model):
    question = models.CharField(max_length=1024, blank=False)
    name = models.CharField(max_length=255, blank=False,)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Choice(models.Model):
    name = models.CharField(max_length=255, blank=False)
    question = models.ForeignKey(Question, related_name='choices', on_delete=models.CASCADE)
    votes = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name

