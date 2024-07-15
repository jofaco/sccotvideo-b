from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ["*"]
# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'OPTIONS': {
            'sql_mode': 'traditional',
        },
       #local
        'NAME': 'sccotvideo041204', 
        #'USER':'root',
        #'PASSWORD':'',
        #'HOST':'localhost',
        #'PORT':'3306',
        #production
        #'NAME': 'sccotvideo041204', 
        'USER':'root',
        'PASSWORD':'123Password',
        'HOST':'localhost',
        'PORT':'3306'
    }
}

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_URL = '/static/'
MEDIA_URL = '/media/'




 
