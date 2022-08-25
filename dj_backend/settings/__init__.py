# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-=1vhvq$1bi2p@tj8tq!5wjxm6i32^)i4f24&_hf97m*y9j4003'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
]

# DATA_UPLOAD_MAX_MEMORY_SIZE = 20000000

ROOT_URLCONF = 'dj_backend.urls'

WSGI_APPLICATION = 'dj_backend.wsgi.application'

# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Kolkata'

USE_I18N = True

USE_TZ = True

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

from .apps_config import *
from .base import *
from .database_config import *
from .media_config import *
from .logger_config import *
from .middlware_config import *
from .password_auth import *
from .staticfiles_config import *
from .templates_config import *