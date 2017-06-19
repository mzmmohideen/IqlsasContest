from django.shortcuts import render
from rest_framework import serializers
from rest_framework import viewsets
from iqlasContest.models import ContestMark
# Create your views here.

class ContestMarkSer(serializers.ModelSerializer):
    class Meta:
        model = ContestMark


class ContestMarkView(viewsets.ModelViewSet):
    model = ContestMark
    queryset = ContestMark.objects.all()
    serializer_class = ContestMarkSer