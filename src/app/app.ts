import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagsH } from './tags-h/tags-h';
import { TagParagrafo } from './tag-paragrafo/tag-paragrafo';
import { TagLista } from './tag-lista/tag-lista';
import { TagLink } from './tag-link/tag-link';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagsH, TagParagrafo, TagLista, TagLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Aula02');
}
