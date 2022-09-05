from unicodedata import name
from django.shortcuts import render
import mimetypes
from django.http import HttpResponse, JsonResponse
from dj_backend.settings.base import BASE_DIR
from .models import GlbModel
from django.core.files.storage import FileSystemStorage


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

def login_status(flag='invalid'):
    if flag == 'loggedin':
            jsn = {
                "login": True,
            }
            print("valid user")
            print(jsn)
            return JsonResponse(jsn, safe=False)
    elif flag == 'invalid':
        jsn = {
            "login": False,
        }
        print("invalid user")
        print(jsn)
        return JsonResponse(jsn, safe=False)

def upload_model(request):
    query_data = GlbModel.objects.all().values('id', 'name')
    models_data = list(query_data.values())
    if request.method == "POST":
        uploaded_file = request.FILES['file']
        new_model = GlbModel(name=uploaded_file.name)
        new_model.save()
        fs = FileSystemStorage()
        fs.save(uploaded_file.name, uploaded_file)
    return render(request, 'upload.html')

def load_by_name(request, mname):
    query_data = GlbModel.objects.all().values('id', 'name')
    models_data = list(query_data.values())
    model_name = str(mname+'.glb')
    model_list = []
    for data in models_data:
        model_list.append(data['name'])
    if model_name in model_list:
        print("Model in DB")
        filepath = str(BASE_DIR)+'/media/'+model_name
        path = open(filepath, 'rb')
        mime_type, _ = mimetypes.guess_type(filepath)
        response = HttpResponse(path, content_type=mime_type)
        response['Content-Disposition'] = "attachment; filename=%s" % model_name
        return response
    else:
        jsn = {'model':'not found'}
        return JsonResponse(jsn, safe=False)

def model_cache(request):
    query_data = GlbModel.objects.all().values('id', 'name')
    models_data = list(query_data.values())
    model_list = []
    for data in models_data:
        model_list.append(data['name'])
    jsn = {'models':model_list}
    return JsonResponse(jsn)

