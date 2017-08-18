from rest_framework import serializers
from .models import Question, Choice

class ChoiceSerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Choice
        fields = ('id', 'name', 'question', 'votes')

class QuestionSerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""
    choices = ChoiceSerializer(many=True, read_only=True)

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Question
        fields = ('id', 'name','question','date_created','choices')
