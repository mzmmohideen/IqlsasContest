from django.conf.urls import include, url
from django.contrib import admin
from iqlasContest.views import ContestMarkView
from rest_framework import routers
from django.views.generic import TemplateView

urlpatterns = [
    # Examples:
    url(r'^$', TemplateView.as_view(template_name='index.html'), name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
]

contest_url = routers.DefaultRouter()
contest_url.register('contest_mark', ContestMarkView)
urlpatterns += contest_url.urls