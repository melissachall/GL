from django.shortcuts import render
from rest_framework import generics,filters,permissions
from .models import Annonce,Bookmark
from .serializers import AnnonceSerializer,BookmarkSerializer,UserSerializer
from django_filters.rest_framework import DjangoFilterBackend
from base.models import User
from rest_framework.response import Response




class Myprofile(generics.RetrieveUpdateAPIView):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class = UserSerializer
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    def get_object(self):
        return self.request.user

class AnnonceList(generics.ListCreateAPIView):
    permission_classes=[permissions.IsAuthenticatedOrReadOnly]
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    
    def perform_create(self, serializer):
        serializer.save(annoncer=self.request.user)

class AnnonceDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes=[permissions.IsAuthenticatedOrReadOnly]
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
class MyAnnonces(generics.ListAPIView):
    def get_queryset(self):
        user = self.request.user
        return Annonce.objects.filter(annoncer=user.id)
    serializer_class=AnnonceSerializer
class AnnonceSearch(generics.ListAPIView):
    permission_classes=[permissions.AllowAny]
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    filter_backends=[DjangoFilterBackend]
    search_fields=('adresse__Commune','' 'adresse__wilaya', 'title', 'category','theme', 'modalite', 'description', 'tarif','published')
    filterset_fields=['adresse__Commune', 'adresse__wilaya', 'title', 'category','theme', 'modalite', 'description', 'tarif','published']

