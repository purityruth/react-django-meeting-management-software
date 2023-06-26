
from pyexpat import model
from turtle import title
from rest_framework import serializers, fields
from .models import Meeting

class MeetingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meeting
        fields = ('meetingId', 'title', 'date', 'time', 'link', 'attend')