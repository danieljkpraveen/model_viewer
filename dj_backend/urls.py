from django.contrib import admin
from django.urls import path, include
from conn.api import api
from conn.views import upload_model, load_by_name, model_cache
from dj_backend import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api.urls),
    path('upload/', upload_model),
    path('load/<str:mname>', load_by_name),
    path('model/cache', model_cache),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
