from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import QuestionCreateView, ChoiceCreateView, ChoiceUpdateView, QuestionUpdateView

urlpatterns = {
    url(r'^questions/$', QuestionCreateView.as_view(), name="createQuestion"),
    url(r'^questions/(?P<pk>[0-9]+)$',QuestionUpdateView.as_view(), name="updateQuestion"),
    url(r'^questions/choices/(?P<pk>[0-9]+)$',ChoiceUpdateView.as_view(), name="updateChoice"),
    url(r'^questions/choices/$',ChoiceCreateView.as_view(), name="createChoice"),
}

urlpatterns = format_suffix_patterns(urlpatterns)