from django.db import models

# Create your models here.

class ContestMark(models.Model):
    contest_name = models.CharField(max_length=255, unique=True)
    day_1 = models.IntegerField(null=True, blank=True)
    day_2 = models.IntegerField(null=True, blank=True)
    day_3 = models.IntegerField(null=True, blank=True)
    day_4 = models.IntegerField(null=True, blank=True)
    day_5 = models.IntegerField(null=True, blank=True)
    day_6 = models.IntegerField(null=True, blank=True)
    day_7 = models.IntegerField(null=True, blank=True)
    day_8 = models.IntegerField(null=True, blank=True)
    day_9 = models.IntegerField(null=True, blank=True)
    day_10 = models.IntegerField(null=True, blank=True)    
    day_11 = models.IntegerField(null=True, blank=True)
    day_12 = models.IntegerField(null=True, blank=True)
    day_13 = models.IntegerField(null=True, blank=True)
    day_14 = models.IntegerField(null=True, blank=True)
    day_15 = models.IntegerField(null=True, blank=True)
    day_16 = models.IntegerField(null=True, blank=True)
    day_17 = models.IntegerField(null=True, blank=True)
    day_18 = models.IntegerField(null=True, blank=True)
    day_19 = models.IntegerField(null=True, blank=True)
    day_20 = models.IntegerField(null=True, blank=True)
    day_21 = models.IntegerField(null=True, blank=True)
    day_22 = models.IntegerField(null=True, blank=True)
    day_23 = models.IntegerField(null=True, blank=True)
    day_24 = models.IntegerField(null=True, blank=True)
    day_25 = models.IntegerField(null=True, blank=True)
    day_26 = models.IntegerField(null=True, blank=True)
    day_27 = models.IntegerField(null=True, blank=True)
    day_28 = models.IntegerField(null=True, blank=True)
    day_29 = models.IntegerField(null=True, blank=True)
    day_30 = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.contest_name
