from rest_framework import generics
from .serializers import QuestionSerializer,ChoiceSerializer
from .models import Question, Choice

class QuestionCreateView(generics.ListCreateAPIView):
    """This class defines the create behavior of our rest api."""
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def perform_create(self, serializer):
        """Save the post data when creating a new bucketlist."""
        serializer.Meta.model.name = "sdfs"
        serializer.save()

class QuestionUpdateView(generics.RetrieveUpdateDestroyAPIView):
    """This class defines the create behavior of our rest api."""
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class ChoiceUpdateView(generics.RetrieveUpdateDestroyAPIView):
    """This class defines the create behavior of our rest api."""
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer

class ChoiceCreateView(generics.ListCreateAPIView):
    """This class defines the create behavior of our rest api."""
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer

    def perform_create(self, serializer):
        """Save the post data when creating a new bucketlist."""
        serializer.save()