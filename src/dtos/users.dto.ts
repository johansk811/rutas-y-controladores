
export interface ICreateUserDTO {
  nombre: string;
  correo: string;
  contrasena: string;
  perfil: 'estudiante' | 'docente' | 'administrador'; 
}




