from django.contrib import admin

from .models import Meeting


class MeetingAdmin(admin.ModelAdmin):
    list_display = ("meetingId", "title", "date", "time", "link")

# Register your models here.
admin.site.register(Meeting, MeetingAdmin)