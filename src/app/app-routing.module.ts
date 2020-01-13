import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisciplinaEditComponent } from './components/disciplina/disciplina-edit/disciplina-edit.component';
import { DisciplinaFormComponent } from './components/disciplina/disciplina-form/disciplina-form.component';
import { DisciplinaDetailComponent } from './components/disciplina/disciplina-detail/disciplina-detail.component';
import { DisciplinaListComponent } from './components/disciplina/disciplina-list/disciplina-list.component';
import { AlunoEditComponent } from './components/aluno/aluno-edit/aluno-edit.component';
import { AlunoFormComponent } from './components/aluno/aluno-form/aluno-form.component';
import { AlunoDetailComponent } from './components/aluno/aluno-detail/aluno-detail.component';
import { AlunoListComponent } from './components/aluno/aluno-list/aluno-list.component';
import { ProfessorEditComponent } from './components/professor/professor-edit/professor-edit.component';
import { ProfessorFormComponent } from './components/professor/professor-form/professor-form.component';
import { ProfessorDetailComponent } from './components/professor/professor-detail/professor-detail.component';
import { ProfessorListComponent } from './components/professor/professor-list/professor-list.component';
import { DisciplinaMatricularComponent } from './components/disciplina/disciplina-matricular/disciplina-matricular.component';

const routes: Routes = [
  {path:'', component: DisciplinaListComponent},
  {path:'disciplinas', component: DisciplinaListComponent},
  {path:'disciplinas/detalhes', component: DisciplinaDetailComponent},
  {path:'disciplinas/cadastrar', component: DisciplinaFormComponent},
  {path:'disciplinas/editar', component: DisciplinaEditComponent},
  {path:'disciplinas/matricular', component: DisciplinaMatricularComponent},
  
  {path:'alunos', component: AlunoListComponent},
  {path:'alunos/detalhes', component: AlunoDetailComponent},
  {path:'alunos/cadastrar', component: AlunoFormComponent},
  {path:'alunos/editar', component: AlunoEditComponent},
  
  {path:'professores', component: ProfessorListComponent},
  {path:'professores/detalhes', component: ProfessorDetailComponent},
  {path:'professores/cadastrar', component: ProfessorFormComponent},
  {path:'professores/editar', component: ProfessorEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingComponents = [
  DisciplinaListComponent, 
  DisciplinaDetailComponent,
  DisciplinaFormComponent,
  DisciplinaEditComponent,
  DisciplinaMatricularComponent,
  AlunoListComponent,
  AlunoDetailComponent,
  AlunoFormComponent,
  AlunoEditComponent,
  ProfessorListComponent,
  ProfessorDetailComponent,
  ProfessorFormComponent,
  ProfessorEditComponent
]
