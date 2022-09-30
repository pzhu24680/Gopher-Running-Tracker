from django.db import models

# Create your models here.
class Entry(models.Model):
    miles=models.FloatField()
    avgPace=models.TimeField()
    date=models.DateField()
    additionalNotes=models.TextField(null=True)
    def __str__(self):
        return str(self.date)