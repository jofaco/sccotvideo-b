from django.contrib import admin
from apps.videos.models import *
from import_export.admin import ImportExportModelAdmin
# Register your models here.

class categoriaAdmin(admin.ModelAdmin):
    list_display = ('id','categoria')

class especialidadAdmin(admin.ModelAdmin):
    list_display = ('id','especialidad')

class subEspecialidadAdmin(admin.ModelAdmin):
    list_display = ('id','subEspecialidad')
class autorAdmin(admin.ModelAdmin):
    list_display = ('id','autor')

class palabraClaveAdmin(admin.ModelAdmin):
    list_display = ('id','palabraClave')



class idiomaAdmin(admin.ModelAdmin):
    list_display = ('id','language')

class tipoVideoAdmin(admin.ModelAdmin):
    list_display = ('id','tipe_video')

admin.site.register(Categoria,categoriaAdmin)
admin.site.register(Idioma,idiomaAdmin)
admin.site.register(tipoVideo,tipoVideoAdmin)
admin.site.register(Video)
admin.site.register(Especialidad,especialidadAdmin)
admin.site.register(subEspecialidad,subEspecialidadAdmin)
admin.site.register(autor,autorAdmin)
admin.site.register(palabraClave,palabraClaveAdmin)



