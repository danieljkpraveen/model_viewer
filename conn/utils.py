from .models import LoginModel

def check_credentials(data):
    login_query = LoginModel.objects.all().values('username', 'password')
    for item in login_query:
        if item['username'] == data['name'] and item['password'] == data['psswd']:
            return True
        else:
            continue
    return False