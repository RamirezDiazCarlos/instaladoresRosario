import raw from './instaladores.json';

export interface Instalador {
  id: string;
  slug: string;
  name: string;
  photo: string;
  matricula: string;
  zones: string[];
  services: string[];
  phone: string;
  rating: number;
  reviews: number;
  featured: boolean;
  description: string;
}

const instaladores = raw as Instalador[];

export default instaladores;
