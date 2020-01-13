import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaMatricularComponent } from './disciplina-matricular.component';

describe('DisciplinaMatricularComponent', () => {
  let component: DisciplinaMatricularComponent;
  let fixture: ComponentFixture<DisciplinaMatricularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinaMatricularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaMatricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
