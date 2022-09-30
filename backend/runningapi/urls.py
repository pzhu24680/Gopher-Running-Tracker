from . import views;
from django.urls import path


urlpatterns = [
    path('', views.get_entries),
    path('<id>',views.entry_detail)
]
