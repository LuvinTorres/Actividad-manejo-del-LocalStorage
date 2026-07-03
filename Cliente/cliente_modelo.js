class ClienteModelo{
constructor(){
    this.nombre= datoNombre;
    this.apellido=datoApellido;
    this.rol=datoRol;
};
get_nombre(){
    return this.nombre;
}
get_apellido(){
    return this.apellido;
}
get_rol(){
    return this.rol;
}
set_nombre(nuevo_nombre){
    this.nombre=nuevo_nombre;
}
set_apellido(nuevo_apellido){
    this.apellido=nuevo_apellido;
}
set_rol(nuevo_rol){
    this.rol=nuevo_rol;
}
}
