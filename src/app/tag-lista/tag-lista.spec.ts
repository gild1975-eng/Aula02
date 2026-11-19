import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagLista } from './tag-lista';

describe('TagLista', () => {
  let component: TagLista;
  let fixture: ComponentFixture<TagLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagLista],
    }).compileComponents();

    fixture = TestBed.createComponent(TagLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
