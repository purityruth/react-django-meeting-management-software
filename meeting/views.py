from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from .models import Meeting
from .serializers import MeetingSerializer




@csrf_exempt
def MeetingAPI(request, pk=0):
	if request.method == 'GET':
		meeting = Meeting.objects.all()
		meeting_serializer = MeetingSerializer(meeting, many=True)
		return JsonResponse(meeting_serializer.data, safe=False)
	elif request.method == 'POST':
		meeting_data = JSONParser().parse(request)
		meeting_serializer = MeetingSerializer(data=meeting_data)
		if meeting_serializer.is_valid():
			meeting_serializer.save()
			return JsonResponse("Added Successfully", safe=False)
		return JsonResponse("Failed To Add", safe=False)
	elif request.method == 'PUT':
		meeting_data = JSONParser().parse(request)
		print("meeting data")
		print(meeting_data)
		print("Meeting ID")
		meeting = Meeting.objects.get(meetingId=meeting_data['meetingId'])
		print(meeting)
		meeting_serializer = MeetingSerializer(meeting, data=meeting_data)
		if meeting_serializer.is_valid():
			meeting_serializer.save()
			return JsonResponse("Updated Successfully", safe=False)
		return JsonResponse("Failed To Update")	
	elif request.method == 'DELETE':
		meeting = Meeting.objects.get(meetingId=pk)
		meeting.delete()
		return JsonResponse("Meeting Was Deleted Successfully", safe=False)		










def motech(request):
	return render(request, 'backend/home.html')



#from rest_framework import viewsets
#from .serializers import MeetingSerializer
#from .models import Meeting

#class MeetingView(viewsets.ModelViewSet):
   # serializer_class = MeetingSerializer
    #queryset = Meeting.objects.all()

