import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DisciplinaComponent } from './components/disciplina/disciplina.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { AlunoService } from './services/aluno.service';
import { DisciplinaService } from './services/disciplina.service';
import { ProfessorService } from './services/professor.service';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { AvaliacaoListComponent } from './components/avaliacao/avaliacao-list/avaliacao-list.component';
import { AvaliacaoFormComponent } from './components/avaliacao/avaliacao-form/avaliacao-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisciplinaComponent,
    AlunoComponent,
    ProfessorComponent,
    routingComponents,
    AvaliacaoComponent,
    AvaliacaoListComponent,
    AvaliacaoFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProfessorService,
    DisciplinaService,
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
