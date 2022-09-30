from rest_framework import serializers;
from .models import Entry;

# class EntrySerializer(serializers.Serializer):
#     miles=serializers.FloatField()
#     avgPace=serializers.TimeField()
#     date=serializers.DateField()
#     additionalNotes=serializers.CharField()
class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model=Entry
        fields=['id','miles','avgPace','date','additionalNotes']
