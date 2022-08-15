from curses.ascii import HT
from fileinput import filename
from urllib import response
from ninja import NinjaAPI
from django.http import JsonResponse
from .models import GlbModel
from .views import serve_one, serve_two


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
    # return JsonResponse(data[1], safe=False)

@api.get('1/triggered')
def trigger_response_one(request):
    jsn = {
        "1": "response_triggered",
    }
    return JsonResponse(jsn, safe=False)

@api.get('2/triggered')
def trigger_response_two(request):
    jsn = {
        "2": "response_triggered",
    }
    return JsonResponse(jsn, safe=False)