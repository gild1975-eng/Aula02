import { Component } from '@angular/core';

/**Criando a minha tipagem de dados, e de como podemos criar uma lista dinamica ou não estatica. 
 */
type aluno = {
  id : number,
  nome: string,
  telemovel: string,
}



// component decorator

@Component({
  selector: 'app-tag-lista',
  imports: [],
  templateUrl: './tag-lista.html',
  styleUrl: './tag-lista.css',
})


export class TagLista {

  // comentario de linha

  // Variaveis globais do tipo string, number, boolean, array, object, any, void, null, undefined, never, unknown
  
  aluno01: aluno = { id: 1, nome: 'João', telemovel: '912345678' };
  
  minhaString: string = 'Minha lista não ordenada Dinamica';

  minhaString2: any = 'Minha lista não ordenada Dinamica';

  minhaLista: string[] = ['Joanna', 'Cristóvão', 'Maria', 'Francisco', 'António', 'João', 'José', 'Ana', 'Pedro', 'Paula'];

  minhaListaOrdenada: string[] = ['Lista ordenada 1', 'Lista ordenada 2', 'Lista ordenada 3'];

  minhaListaNumerica: number[] = [1, 2, 3, 4, 5];

  minhaListaBoolean: boolean[] = [true, false, true, false, true];

  /** Comentario de bloco 
   * 
   * Falarmos de tipagem de dados, e de como podemos criar uma lista dinamica ou não estatica.
   * tipagem do tipo string, number, boolean, array, object, any, void, null, undefined, never, unknown
   * 
  */

//array de string 

minhaListaObject: { nome: string, idade: number }[] = [
  { nome: 'João', idade: 30 },
  { nome: 'Maria', idade: 25 },
  { nome: 'José', idade: 40 }
];

minhaListaItem: { nome: string, idade: number }[] = [
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

constructor() {
  this.minhaString2 = 10; // Atribuindo um número a uma variável do tipo any
  this.minhaLista.push('Item 6', 'item injetado pelo constructor'); // Adicionando um item à lista
  this.minhaListaOrdenada.push('Lista ordenada 4'); // Adicionando um item à lista ordenada
  this.minhaListaNumerica.push(6); // Adicionando um número à lista numérica
  this.minhaListaBoolean.push(false); // Adicionando um valor booleano à lista booleana
  this.minhaListaObject.push({ nome: 'Ana', idade: 20 }); // Adicionando um objeto à lista de objetos
  this.minhaListaAny.push('Item 7'); // Adicionando um item à lista do tipo any
  this.minhaListaVoid.push(undefined); // Adicionando um valor undefined à lista do tipo void
  this.minhaListaNull.push(null); // Adicionando um valor null à lista do tipo null
  this.minhaListaUndefined.push(undefined); // Adicionando um valor undefined à lista do tipo undefined
  this.minhaListaUnknown.push('Item 8'); // Adicionando um item à lista do tipo unknown 

  for (let i = 0; i < this.minhaLista.length; i++) {

    const element = this.minhaLista[i];
   
    console.log("meus andares:" , element);






  }
}

// Fim de classe
