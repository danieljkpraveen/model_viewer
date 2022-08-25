import shutil
from ninja import NinjaAPI
from django.http import JsonResponse
from .models import GlbModel, LoginModel
from .views import serve_one, serve_two, login_status
from .utils import check_credentials
from .schema import ReceivedData#, FileUpload
from django.core.files.storage import FileSystemStorage


api = NinjaAPI()

query_data = GlbModel.objects.all().values('id', 'name')
data = list(query_data.values())

@api.get('/model')
def names(request):
    return JsonResponse(data, safe=False)

@api.get('/model/1')
def names(request):
    return serve_one()

@api.get('/model/2')
def names(request):
    return serve_two()

@api.get('1/triggered')
def trigger_response_one(request):
    jsn = {
        "1": "response_triggered",
    }
    shutil.copy('r3f-frontend/src/Shuttle.js','r3f-frontend/src/Glb.js')
    return JsonResponse(jsn, safe=False)

@api.get('2/triggered')
def trigger_response_two(request):
    jsn = {
        "2": "response_triggered",
    }
    shutil.copy('r3f-frontend/src/Car.js','r3f-frontend/src/Glb.js')
    return JsonResponse(jsn, safe=False)

# @api.post('/credentials')
@api.api_operation(['GET', 'POST'], '/credentials')
def get_credentials(request, data: ReceivedData):
    if request.method == "POST":
        data_dict = data.dict()
        status = check_credentials(data_dict)
        if status:
            return login_status('loggedin')
        else:
            return login_status()

@api.api_operation(['GET', 'POST'], '/signup')
def signup_user(request, data: ReceivedData):
    all_set = LoginModel.objects.all().values('username')
    if request.method == "POST":
        data_dict = data.dict()
        for set in all_set:
            if data_dict['name'] == set['username']:
                jsn = {"signup":False,}
                print("Failed")
                return JsonResponse(jsn, safe=False)
        new_login = LoginModel(username = data_dict['name'], password = data_dict['psswd'])
        new_login.save()
        jsn = {
        "signup": True,
        }
        return JsonResponse(jsn, safe=False)

# @api.get('model/cache')
# def model_cache(request):
#     model_list = []
#     for model in data:
#         model_list.append(model['name'])
#     jsn = {'models':model_list}
#     return JsonResponse(jsn, safe=False)

"""@api.api_operation(['GET', 'POST'], '/upload')
def upload_file(request, data: FileUpload):
    # print(request.FILES['model'])
    if request.method == "POST":
        # print("post received")
        data_dict = data.dict()
        print(data_dict['file'])
        # print(request.FILES)
        uploaded_file = data_dict['file']
        print(uploaded_file)
        fs = FileSystemStorage()
        fs.save('test.glb', uploaded_file)
        jsn = {"upload":True}
        return JsonResponse(jsn, safe=False)
    else:
        jsn = {"upload":False}
        return JsonResponse(jsn, safe=False)
"""