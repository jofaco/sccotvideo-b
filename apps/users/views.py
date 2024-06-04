from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated

from apps.users.api.serializers.User_serializers import CustomTokenOptainPairSerializer, CustomUserSerializer
from apps.users.models import User

# Importacion modulo para usar Odoo
import xmlrpc.client


class login(TokenObtainPairView):
    serializer_class = CustomTokenOptainPairSerializer
    print("entro al login")
    def post(self, request, *args, **kwargs):
        # Credenciales Odoo para conexion
        url = "https://sccot.odoo.com"
        db = "sccot-master-6280105"
        #url = "https://sccot-tests-0305-12088670.dev.odoo.com"
        #db = "sccot-tests-0305-12088670"
        usernameOdoo = "desarrollador.web@sccot.org.co" 
        #key = "Codig@2023"
        #key = "d5fc1c1e9d85cf0827c06f3eb695820df719d641"
        #url = "https://sccot.odoo.com"
        #db = "sccot"
        #usernameOdoo = "desarrollador.web@sccot.org.co" 
        key = "ff15f623ef77dbfccd570420830edd64f9334c5a"
        #key = "009d8fa50f7872c08c233726209a4b8a3af625b0"
        #key = "0c256e03fe71e273993a4c3501722b0384f77627"
        """Metodo para realizar el login por parte del usuario

        Args.
            request (json): Datos enviados desde el login con las credenciales de ingreso(username y password)

        Returns.
            Response: Retorna los datos necesarios para realizar peticiones correctamente (access_token, refresh_token, user), mensaje y estado de la petición.
        """        
        username = request.data.get('username','')
        password = request.data.get('password','')

        user = authenticate(
            username = username,
            password = password
        )
        print("entro aqui")
        if user:
            print("Usuario ya existente. validacion 1")
            
            login_serializer = self.serializer_class(data= request.data)
# Obtener usuarios de odoo y comparar datos

            common = xmlrpc.client.ServerProxy('{}/xmlrpc/2/common'.format(url))
            uid = common.authenticate(db,usernameOdoo,key,{})
            models = xmlrpc.client.ServerProxy('{}/xmlrpc/2/object'.format(url))

            # Buscando usuario odoo que contenga numero de documento y email a buscar            
            email_search = str(username).strip()
            document_number = str(password).strip()
            print(email_search,document_number)
            search_domain = [('document_number', '=', document_number ), ('email', 'like',email_search )]
            contact_ids = models.execute_kw(db, uid, key, 'res.partner', 'search', [search_domain])

            if contact_ids:
                contact_details = models.execute_kw(db, uid, key, 'res.partner', 'read', [contact_ids[0]])
                # Validamos si el usuario esta Al día en odoo
                # Validar categoria del miembro etc
                if (
                        contact_details[0]["x_studio_estado_del_miembro"] == "Al día" and
                        (
                            contact_details[0]["x_studio_categora_del_miembro"][1] == "Titular" or
                            contact_details[0]["x_studio_categora_del_miembro"][1] == "Titular Senior" or
                            contact_details[0]["x_studio_categora_del_miembro"][1] == "Honorario" or
                            contact_details[0]["x_studio_categora_del_miembro"][1] == "Correspondiente" or
                            contact_details[0]["x_studio_categora_del_miembro"][1] == "Residente" or
                            contact_details[0]["x_studio_categora_del_miembro"][1] == "Adherente" or
                            contact_details[0]["x_studio_categora_del_miembro"][1] == "Correspondiente Colombiano"
                        ) and
                        (
                            contact_details[0]["x_studio_clase_de_cliente"][1] == "Miembro" or
                            contact_details[0]["x_studio_clase_de_cliente"][1] == "Registro"
                        )
                    ):

                    login_serializer = self.serializer_class(data= request.data)
                    # Si el usuario esta al dia se realiza validacion de login
                    if login_serializer.is_valid():

                        user_serializer = CustomUserSerializer(user)
                        return Response({
                            'access_token': login_serializer.validated_data.get('access'),
                            'refresh_token': login_serializer.validated_data.get('refresh'),
                            'user': user_serializer.data,
                            'message':'Inicio de sesión exitoso!'
                        }, status=status.HTTP_200_OK) 
                    else:
                        print("algun dato quedo mal ")
                        return Response({'error':'Nombre de usuario o contraseña incorrecta incorrectos'}, status=status.HTTP_400_BAD_REQUEST)
                else:
                    return Response({'error':'Lo sentimos, se ha restringido el acceso'}, status=status.HTTP_400_BAD_REQUEST)

            else:
                print("No aparece en el sistema")
                # validar si es superuser
                login_serializer = self.serializer_class(data= request.data)
                    # Si el usuario esta al dia se realiza validacion de login
                if login_serializer.is_valid():

                    user_serializer = CustomUserSerializer(user)
                    return Response({
                        'access_token': login_serializer.validated_data.get('access'),
                        'refresh_token': login_serializer.validated_data.get('refresh'),
                        'user': user_serializer.data,
                        'message':'Inicio de sesión exitoso!'
                    }, status=status.HTTP_200_OK) 
                else:
                    print("algun dato quedo mal ")
                    return Response({'error':'Nombre de usuario o contraseña incorrecta incorrectos'}, status=status.HTTP_400_BAD_REQUEST)

                # -----------------------
        
            # -----------------------------------------
        else:
            print("se ejecuto el else de aqui")
            # Obtener usuarios de odoo y comparar datos

            common = xmlrpc.client.ServerProxy('{}/xmlrpc/2/common'.format(url))
            uid = common.authenticate(db,usernameOdoo,key,{})
            models = xmlrpc.client.ServerProxy('{}/xmlrpc/2/object'.format(url))

            # Buscando usuario odoo que contenga numero de documento y email a buscar            
            email_search = str(username).strip()
            document_number = str(password).strip()
            print(email_search,document_number)
            search_domain = [('document_number', '=', document_number ), ('email', 'like',email_search )]
            contact_ids = models.execute_kw(db, uid, key, 'res.partner', 'search', [search_domain])

            if contact_ids:
                contact_details = models.execute_kw(db, uid, key, 'res.partner', 'read', [contact_ids[0]])
                print(contact_details[0]["name"])
                if contact_details:
                    if (
                        contact_details[0]["x_studio_estado_del_miembro"] == "Al día" and
                        (
                            contact_details[0]["x_studio_categora_del_miembro"][1] == "Titular" or
                            contact_details[0]["x_studio_categora_del_miembro"][1] == "Titular Senior" or
                            contact_details[0]["x_studio_categora_del_miembro"][1] == "Honorario" or
                            contact_details[0]["x_studio_categora_del_miembro"][1] == "Correspondiente" or
                            contact_details[0]["x_studio_categora_del_miembro"][1] == "Residente" or
                            contact_details[0]["x_studio_categora_del_miembro"][1] == "Adherente" or
                            contact_details[0]["x_studio_categora_del_miembro"][1] == "Correspondiente Colombiano"
                        ) and
                        (
                            contact_details[0]["x_studio_clase_de_cliente"][1] == "Miembro" or
                            contact_details[0]["x_studio_clase_de_cliente"][1] == "Registro"
                        )
                    ):
                        hashed_password = make_password(password)
                        print(hashed_password) #Cambiar el contact detail de email a name user
                        created = User.objects.get_or_create(username=contact_details[0]["email"],name=contact_details[0]["email"], defaults={'email': contact_details[0]["email"], 'password': hashed_password})
                        userMod = authenticate(
                            username = email_search,
                            password = password
                        )
                        #creacion de un user
                        if created:
                            print("contraseña:",password.strip())
                            print("correo:",username.strip())
                            print("---------------Usuario creado exitosamente.----------")
                            print("id del usuario",userMod)
                            print("Nombre:", contact_details[0]["name"])
                            print("Telefono:", contact_details[0]["phone"])
                            print("Numero de documento:", contact_details[0]["document_number"])
                            print("Correo:", contact_details[0]["email"])
                            print("Estado miembro:", contact_details[0]["x_studio_estado_del_miembro"])
                            print("Clase de cliente:", contact_details[0]["x_studio_clase_de_cliente"])
                            login_serializer = self.serializer_class(data= request.data)
                            print("se validara si se puede iniciar sesion")
                            if login_serializer.is_valid():
                                user_serializer = CustomUserSerializer(userMod)
                                print("ya se envio el usuario para iniciar sesion")
                                
                                return Response({
                                    'access_token': login_serializer.validated_data.get('access'),
                                    'refresh_token': login_serializer.validated_data.get('refresh'),
                                    'user': user_serializer.data,
                                    'message':'Inicio de sesión exitoso!'
                                }, status=status.HTTP_200_OK) 
                            else:
                                print("ya se valido y se dio o dara una respuesta")
                                return Response({'error':'Tienes novedades con tu usuario'}, status=status.HTTP_400_BAD_REQUEST)
                                
                        else:
                            print("Usuario ya existente.")
                            login_serializer = self.serializer_class(data= request.data)

                            if login_serializer.is_valid():
                                user_serializer = CustomUserSerializer(user)
                                
                                return Response({
                                    'access_token': login_serializer.validated_data.get('access'),
                                    'refresh_token': login_serializer.validated_data.get('refresh'),
                                    'user': user_serializer.data,
                                    'message':'Inicio de sesión exitoso!'
                                }, status=status.HTTP_200_OK) 
                        # return Response({'error':'Contraseña o nombre de usuario incorrectos'}, status=status.HTTP_400_BAD_REQUEST)
                    else:
                        # Validar si es una empresa y validar campo Acceso SCCOT y crearle el usuario

                        print("validar si es una empresa")
                        print("Tienes novedades con tu usuario", password, "not found.")
                        return Response({'error':'Tienes novedades con tu usuario'}, status=status.HTTP_400_BAD_REQUEST)
                else:
                
                    print("No hay detalles del usuario")
            else:
            
                print("Contacto no existe en nuestro sistema", password, "not found.")
                print("cualquier string",type("hola"))
                print("correo string",type(email_search))
                print("correo string",type(username))
                print("password string",type(password))
                return Response({'error':'Nombre de usuario o contraseña incorrecta incorrectos'}, status=status.HTTP_400_BAD_REQUEST)
    



            # -----------------------------------------
           
            # Si el usuario se creó, created será True; de lo contrario, será False
            

class logout(GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class= CustomUserSerializer
    authentication_classes = ()

    def post(self, request):
        """Metodo para realizar el logout y "eliminar" el refresh_token

        Args.
            request (data): Data con el refresh_token

        Returns.
            Response: Respuesta con el estado de la petición.
        """        
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    
