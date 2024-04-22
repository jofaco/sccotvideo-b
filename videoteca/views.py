from django.http import JsonResponse

def prueba(request):
    # Aquí puedes devolver cualquier valor que desees probar
    return JsonResponse({"mensaje": "¡Hola, esta es una prueba de API!"})