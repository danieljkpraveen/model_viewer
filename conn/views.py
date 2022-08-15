# from django.shortcuts import render
import mimetypes
from django.http import HttpResponse
from dj_backend.settings import BASE_DIR

def serve_one():
    filename = 'car.glb'
    filepath = str(BASE_DIR)+'/media/'+filename    
    path = open(filepath, 'rb')
    mime_type, _ = mimetypes.guess_type(filepath)
    response = HttpResponse(path, content_type=mime_type)
    response['Content-Disposition'] = "attachment; filename=%s" % filename
    return response

def serve_two():
    filename = 'Space shuttle.glb'
    filepath = str(BASE_DIR)+'/media/'+filename    
    path = open(filepath, 'rb')
    mime_type, _ = mimetypes.guess_type(filepath)
    response = HttpResponse(path, content_type=mime_type)
    response['Content-Disposition'] = "attachment; filename=%s" % filename
    return response

