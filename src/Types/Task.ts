//type Estados = 'PORHACER' | 'PORTESTEAR' | 'ENPRODUCCION' | 'COMPLETADA';

export interface Task {
    id?: number;
    titulo: string;
    descripcion: string;
    tiempo: number;
    imagen: string;
    responsable: string;
    estado: string;
    color: string;
}


