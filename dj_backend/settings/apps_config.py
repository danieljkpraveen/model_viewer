# Application definition

DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

PACKAGE_APPS = [
    'corsheaders',
]

ADDITIONAL_APPS = [
    'conn',
]

INSTALLED_APPS = DJANGO_APPS + PACKAGE_APPS + ADDITIONAL_APPS

