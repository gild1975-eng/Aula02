import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-lista',
  imports: [],
  templateUrl: './tag-lista.html',
  styleUrl: './tag-lista.css',
})
export class TagLista {

  // comentario de linha


  /** Comentario de bloco 
   * 
   * Falarmos de tipagem de dados, e de como podemos criar uma lista dinamica ou não estatica.
   * tipagem do tipo string, number, boolean, array, object, any, void, null, undefined, never, unknown
   * 
  */

minhaString: string = 'Minha lista não ordenada Dinamica';

minhaLista: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

minhaListaOrdenada: string[] = ['Lista ordenada 1', 'Lista ordenada 2', 'Lista ordenada 3'];

minhaListaNumerica: number[] = [1, 2, 3, 4, 5];

minhaListaBoolean: boolean[] = [true, false, true, false, true];

minhaListaObject: { nome: string, idade: number }[] = [
  { nome: 'João', idade: 30 },
  { nome: 'Maria', idade: 25 },
  { nome: 'José', idade: 40 }
];

minhaListaAny: any[] = ['Item 1', 2, true, { nome: 'João' }, [1, 2, 3]];

minhaListaVoid: void[] = [undefined, undefined, undefined];

minhaListaNull: null[] = [null, null, null];

minhaListaUndefined: undefined[] = [undefined, undefined, undefined];

minhaListaNever: never[] = [];

minhaListaUnknown: unknown[] = ['Item 1', 2, true, { nome: 'João' }, [1, 2, 3]];





}// Fim de classe
