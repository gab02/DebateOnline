import { Comentarios } from './comentarios';

export class Candidatos{


 constructor(
  public id: String,
  public like: string,
  public unlike: string,
  public name: string,
  public partido: string,
  public uf: string,
  public v: string,
  public comentarios: Comentarios[],

 ){}
}
