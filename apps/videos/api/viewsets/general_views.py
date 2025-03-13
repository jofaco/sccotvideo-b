
from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response

from apps.videos.models import Idioma, tipoVideo, Categoria
from apps.videos.api.serializers.general_serializers import *
from apps.videos.api.serializers.historial_serializers import *


import xmlrpc.client
from rest_framework import viewsets

import json
class categoriaViewset(viewsets.ModelViewSet):
    """Clase para el control del modelo Categoria

    Parameters.
        viewsets (ModelViewSet)---> provee por default `create()`, `retrieve()`, `update()`,
    `partial_update()`, `destroy()` and `list()` actions.

    Returns:
        queryset: Retorna un objeto del modelo Categoria
    """    
    serializer_class = CategoriaSerializer

    def get_queryset(self):
        queryset = Categoria.objects.all()
        return queryset


class idiomaViewset(viewsets.ModelViewSet):
    """Clase para el control del modelo Idioma

    Parameters.
        viewsets (ModelViewSet)---> provee por default `create()`, `retrieve()`, `update()`,
    `partial_update()`, `destroy()` and `list()` actions.

    Returns:
        queryset: Retorna un objeto del modelo Idioma
    """

    serializer_class = IdiomaSerializer

    def get_queryset(self):
        queryset = Idioma.objects.all()
        return queryset


class tipoVideoViewset(viewsets.ModelViewSet):
    """Clase para el control del modelo tipoVideo

    Parameters.
        viewsets (ModelViewSet)---> provee por default `create()`, `retrieve()`, `update()`,
    `partial_update()`, `destroy()` and `list()` actions.

    Returns:
        queryset: Retorna un objeto del modelo tipoVideo
    """    
    serializer_class = tipoVideoSerializer

    def get_queryset(self):
        queryset = tipoVideo.objects.all()
        return queryset


class historialUserViewset(viewsets.ModelViewSet):
    
    serializer_class = HistorialUserSerializer

    def get_queryset(self, pk=None):
        """Obtiene el objeto del modelo historial_user consultado

        Args.
            pk (id, optional): Id del historial_user en la base de datos. Defaults to None.

        Returns.
            object: Ojeto del modelo historial_user correspondiente al pk ingresado, si no hay pk se retornan todos.
        """
        model = self.get_serializer().Meta.model
        if pk == None:
            return model.objects.all()
        else:
            return model.objects.get(id=pk)

    def create(self, request, *args, **kwargs):
        """Metodo para registrar un nuevo historial_user

        Args.
            request (json): Data enviada desde el frontend para registrar un nuevo historial_user

        Returns.
            Response: Mensaje, data del objeto creado y estado de la petición.
        """
        serializer = HistorialUserSerializer3(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(
                    {"message": "historial agregado con exito!","data":serializer.data}, status=status.HTTP_200_OK
                )

    def list(self, request):
        """Metodo para listar todos los historial_user

        Args.
            request (_type_): No data

        Returns.
            Response: Data de todos los historial_user y estado de la petición.
        """
        historialUsers_serializer = self.serializer_class(self.get_queryset(), many=True)
        data =  historialUsers_serializer.data
        return Response(data, status=status.HTTP_200_OK)

    @action(detail=False, methods=['get'])
    def list_4_comments(self, request):
        """Metodo para listar todos los historial_user filtrando comentarios activos

        Args.
            request (_type_): No data

        Returns.
            Response: Data de todos los historial_user y estado de la petición.
        """
        historialUsers_serializer = self.serializer_class(self.get_queryset().filter(approved_by_m=True).filter(commentary__isnull=False).order_by('-id'), many=True)
        data =  historialUsers_serializer.data
        return Response(data, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def list_by_user(self, request, pk=None):
        """Metodo para consultar todos los historiales por usuario específico

        Args.
            request (json): Data enviada desde el frontend con el id del usuario para realizar la consulta.
            pk (id, optional): Id del historial_user. Defaults to None.

        Returns.
            Response: Data todos los historiales buscados y estado de la petición.
        """        
        historial_by_user = self.serializer_class(self.get_queryset().filter(usuario_id=request.data['user_id']), many=True)
        data =  historial_by_user.data
        return Response(data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk=None):
        """Metodo para consultar un historial en específico.

        Args.
            request (_type_): No data.
            pk (Id, optional): Id del historial_user a consultar. Defaults to None.

        Returns.
            Response: Data del historial_user consultado y estado del a petición, mensaje de error si no hay Data.
        """
        historial = self.get_queryset(pk)
        if historial:
            historial_serializer = self.serializer_class(historial)
            return Response(historial_serializer.data, status=status.HTTP_200_OK)
        return Response(
            {"error": "No existe un historial con estos datos!"},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    def partial_update(self, request, pk=None):
        """Metodo para la actualización parcial de un historial_user

        Args.
            request (json): Datos a actualizar del historial_user
            pk (id, optional): Id del historial_user a actualizar. Defaults to None.

        Returns.
            Response: Mensaje y estado de la petición.
        """
        if self.get_queryset(pk):
            serializer = self.serializer_class(self.get_queryset(pk), data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "historial actualizado con exito!"}, status=status.HTTP_200_OK)

class historialVideoViewset(viewsets.ModelViewSet):
    serializer_class = HistorialVideoSerializer

    def get_queryset(self, pk=None):
        """Obtiene el objeto del modelo historial_Video consultado

        Args.
            pk (id, optional): Id del historial_Video en la base de datos. Defaults to None.

        Returns.
            object: Ojeto del modelo historial_Video correspondiente al pk ingresado, si no hay pk se retornan todos.
        """
        model = self.get_serializer().Meta.model
        if pk == None:
            return model.objects.all()
        else:
            return model.objects.get(id=pk)

    def create(self, request, *args, **kwargs):
        """Metodo para registrar un nuevo historial_Video

        Args.
            request (json): Data enviada desde el frontend para registrar un nuevo historial_Video

        Returns.
            Response: Mensaje, data del objeto creado y estado de la petición.
        """
        serializer = HistorialVideoSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(
                    {"message": "historial agregado con exito!","data":serializer.data}, status=status.HTTP_200_OK
                )

    def list(self, request):
        """Metodo para listar todos los historial_Video

        Args.
            request (_type_): No data

        Returns.
            Response: Data de todos los historial_Video y estado de la petición.
        """
        historialUsers_serializer = self.serializer_class(self.get_queryset(), many=True)
        data =  historialUsers_serializer.data
        return Response(data, status=status.HTTP_200_OK)

    @action(detail=False, methods=['post'])
    def list_by_video(self, request, pk=None):
        """Metodo para consultar todos los historiales por video específico

        Args.
            request (json): Data enviada desde el frontend con el id del video para realizar la consulta.
            pk (id, optional): Id del historial_video. Defaults to None.

        Returns.
            Response: Data todos los historiales buscados y estado de la petición.
        """
        historial_by_video = self.get_queryset().filter(video_id=request.data['video_id'])
        data =  historial_by_video.values()
        return Response(data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk=None):
        """Metodo para consultar un historial en específico.

        Parameters.
            request (_type_): No data.
            pk (Id, optional): Id del historial_Video a consultar. Defaults to None.

        Returns.
            Response: Data del historial_Video consultado y estado del a petición, mensaje de error si no hay Data.
        """
        historial = self.get_queryset(pk)
        if historial:
            historial_serializer = self.serializer_class(historial)
            return Response(historial_serializer.data, status=status.HTTP_200_OK)
        return Response(
            {"error": "No existe un historial con estos datos!"},
            status=status.HTTP_400_BAD_REQUEST,
        )
    
    def partial_update(self, request, pk=None):
        """Metodo para la actualización parcial de un historial_Video

        Args.
            request (json): Datos a actualizar del historial_Video
            pk (id, optional): Id del historial_Video a actualizar. Defaults to None.

        Returns.
            Response: Mensaje y estado de la petición.
        """
        if self.get_queryset(pk):
            serializer = self.serializer_class(self.get_queryset(pk), data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "historial actualizado con exito!"}, status=status.HTTP_200_OK)
            
class especialidadViewset(viewsets.ModelViewSet):
 
    serializer_class = EspecialidadSerializer

    def get_queryset(self):
        queryset = Especialidad.objects.all()
        return queryset
    
class subEspecialidadViewset(viewsets.ModelViewSet):
 
    serializer_class = SubEspecialidadSerializer

    def get_queryset(self):
        queryset = subEspecialidad.objects.all()
        return queryset

# class autorViewset(viewsets.ModelViewSet):
 
#     serializer_class = AutorSerializer

#     def get_queryset(self):
#         queryset = autor.objects.all()
#         return queryset
    

class autorViewset(viewsets.ViewSet):  
    url = "https://sccot.odoo.com"
    db = "sccot-master-6280105"
    usernameOdoo = "desarrollador.web@sccot.org.co"
    key = "ff15f623ef77dbfccd570420830edd64f9334c5a"

    def list(self, request):
        try:
            # Obtener autores locales
            queryset = autor.objects.all().values("id", "autor")
            local_authors = list(queryset) 

            # Conectar con Odoo
            common = xmlrpc.client.ServerProxy(f"{self.url}/xmlrpc/2/common")
            uid = common.authenticate(self.db, self.usernameOdoo, self.key, {})

            odoo_data = []
            if uid:
                models = xmlrpc.client.ServerProxy(f"{self.url}/xmlrpc/2/object")
                search_domain = [('x_studio_clase_de_cliente', 'in', ["Miembro", "No Miembro", "Registro"])]
                odoo_contacts = models.execute_kw(
                    self.db, uid, self.key, 'res.partner', 'search_read',
                    [search_domain], {'fields': ['id', 'name']}
                )

                for contact in odoo_contacts:
                    odoo_data.append({"id": contact['id'], "autor": contact.get("name", "Desconocido")})

            # Combinar datos de Django y Odoo
            combined_data = local_authors + odoo_data
            return Response(combined_data, status=status.HTTP_200_OK)

        except Exception as e:
            print("🔥 ERROR en list:", str(e))
            print(traceback.format_exc())  
            return Response({'error': 'No se pudo obtener datos'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def retrieve(self, request, pk=None):
        try:
            # Normalizar el nombre del autor eliminando espacios extras y haciendo la búsqueda insensible a mayúsculas
            autor_local = autor.objects.filter(autor__iexact=pk.strip()).first()

            if autor_local:
                return Response({"id": autor_local.id, "autor": autor_local.autor}, status=status.HTTP_200_OK)
            
            return Response({"error": "Autor no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def create(self, request):
        try:
            data = request.data
            autor_id = data.get("id")  # Obtener el ID del autor si viene en la petición
            autor_nombre = data.get("autor")  # Obtener el nombre del autor

            # Validar si el autor con ese ID ya existe
            if autor_id and autor.objects.filter(id=autor_id).exists():
                return Response({"message": "El autor ya existe", "id": autor_id}, status=status.HTTP_200_OK)

            # Si no existe, crearlo
            nuevo_autor = autor.objects.create(id=autor_id, autor=autor_nombre)
            return Response({"id": nuevo_autor.id, "autor": nuevo_autor.autor}, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

class palabraClaveViewset(viewsets.ModelViewSet):
 
    serializer_class = PalabraClaveSerializer

    def get_queryset(self):
        queryset = palabraClave.objects.all()
        return queryset

