import { Avaliacao } from './../models/Avaliacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  private avaliacao:Avaliacao = new Avaliacao();
  constructor(private http:HttpClient) { }

  URL='http://localhost:8080/api/avaliacoes';

  getAvaliacoes(){
    return this.http.get<Avaliacao[]>(this.URL);
  }

  cadastrar(avaliacao:Avaliacao){
    return this.http.post<Avaliacao>(this.URL, avaliacao);
  }

  deletar(avaliacao:Avaliacao){
    return this.http.delete<Avaliacao>(this.URL+"/"+avaliacao.idDisciplina+"/"+avaliacao.idAluno);
  }

}
