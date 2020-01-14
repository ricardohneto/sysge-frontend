import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Professor } from 'app/models/Professor';

@Injectable()
export class ProfessorService {

  professor: Professor = new Professor();
  constructor(private http:HttpClient) { }

  URL='http://localhost:8080/api/professores';

  getProfessores(){
    return this.http.get<Professor[]>(this.URL);
  }

  getProfessoresDetalhes(){
    return this.http.get<Professor[]>(this.URL+'/detalhes');
  }

  cadastrar(professor:Professor){
    return this.http.post<Professor>(this.URL, professor);
  }

  getProfessorMatricula(matricula:String){
    return this.http.get<Professor>(this.URL+"/"+matricula);
  }

  atualizar(professor:Professor){
    return this.http.put<Professor>(this.URL+"/", professor);
  }

  deletar(professor:Professor){
    return this.http.delete<Professor>(this.URL+"/"+professor.matricula);
  }

  setProfessor(professor:Professor){
    this.professor = professor;
  }

  getProfessor(){
    return this.professor;
  }

}
