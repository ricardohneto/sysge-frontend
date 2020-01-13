import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disciplina } from 'app/models/Disciplina';
import { Aluno } from 'app/models/Aluno';

@Injectable()
export class DisciplinaService {

  constructor(private http:HttpClient) { }

  URL='http://localhost:8080/api/disciplinas';

  getDisciplinas(){
    return this.http.get<Disciplina[]>(this.URL);
  }

  getDisciplinasDetalhes(){
    return this.http.get<Disciplina[]>(this.URL+'/detalhes');
  }

  cadastrar(disciplina:Disciplina){
    return this.http.post<Disciplina>(this.URL, disciplina);
  }

  getDisciplinaId(id:number){
    return this.http.get<Disciplina>(this.URL+"/"+id);
  }

  atualizar(disciplina:Disciplina){
    return this.http.put<Disciplina>(this.URL+"/"+disciplina.id, disciplina);
  }

  deletar(disciplina:Disciplina){
    return this.http.delete<Disciplina>(this.URL+"/"+disciplina.id);
  }

  matricular(disciplina:Disciplina){
    return this.http.put<Disciplina>(this.URL+"/matricular/"+disciplina.id, disciplina);
  }

}
