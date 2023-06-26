from turtle import title
from django.db import models

# Create your models here.


class Meeting(models.Model):
    meetingId = models.AutoField(primary_key=True)
    title = models.CharField(max_length=150)
    date = models.CharField(max_length=100)
    time = models.CharField(max_length=100)
    link = models.CharField(max_length=500)
    attend = models.BooleanField(default=False)

    def __str__(self):
        return self.title