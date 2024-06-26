from apps.videos.models import Categoria, Idioma, tipoVideo, Especialidad, subEspecialidad, palabraClave, autor

from rest_framework import serializers


class IdiomaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Idioma
        fields = "__all__"


class IdiomaSerializerV(serializers.PrimaryKeyRelatedField, serializers.ModelSerializer):
    class Meta:
        model = Idioma
        fields = "__all__"


class tipoVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = tipoVideo
        fields = "__all__"


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = "__all__"


class CategoriaSerializerV(serializers.PrimaryKeyRelatedField, serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = "__all__"

class EspecialidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Especialidad
        fields = "__all__"

class EspecialidadSerializerV(serializers.PrimaryKeyRelatedField, serializers.ModelSerializer):
    class Meta:
        model = Especialidad
        fields = "__all__"
class SubEspecialidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = subEspecialidad
        fields = "__all__"

class SubEspecialidadSerializerV(serializers.PrimaryKeyRelatedField, serializers.ModelSerializer):
    class Meta:
        model = subEspecialidad
        fields = "__all__"
class AutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = autor
        fields = "__all__"

class AutorSerializerV(serializers.PrimaryKeyRelatedField, serializers.ModelSerializer):
    class Meta:
        model = autor
        fields = "__all__"

class PalabraClaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = palabraClave
        fields = "__all__"

class PalabraClaveSerializerV(serializers.PrimaryKeyRelatedField, serializers.ModelSerializer):
    class Meta:
        model = palabraClave
        fields = "__all__"

