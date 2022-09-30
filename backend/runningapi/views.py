from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import EntrySerializer
from .models import Entry
@api_view(['GET','POST','PUT'])
def get_entries(request):
    if request.method =='GET':
        queryset=Entry.objects.order_by('date').reverse().all()
        serializer=EntrySerializer(queryset,many=True)
        return Response(serializer.data)
    elif request.method=="POST":
        serializer=EntrySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
@api_view(['GET','PUT','DELETE'])
def entry_detail(request, id):
    targetEntry=Entry.objects.get(pk=id)
    if request.method=='GET':
        serializer=EntrySerializer(targetEntry)
        return Response(serializer.data)
    elif request.method=="PUT":
        serializer=EntrySerializer(targetEntry,data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method=="DELETE":
        targetEntry.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
