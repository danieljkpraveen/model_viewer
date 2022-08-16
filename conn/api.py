import shutil
from ninja import NinjaAPI
from django.http import JsonResponse
from .models import GlbModel, LoginModel
from .views import serve_one, serve_two, login_status
from .utils import check_credentials
from .schema import ReceivedData


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


