import { AvaliacaoService } from './../../../services/avaliacao.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Avaliacao } from 'app/models/Avaliacao';

@Component({
  selector: 'app-avaliacao-form',
  templateUrl: './avaliacao-form.component.html',
  styleUrls: ['./avaliacao-form.component.css']
})
export class AvaliacaoFormComponent implements OnInit {

  constructor(private router:Router, private service:AvaliacaoService) { }

  avaliacao: Avaliacao = new Avaliacao();

  ngOnInit() {
  }

  Cadastrar(){
    if(this.avaliacao.dataAplicacao == null || this.avaliacao.idAluno == null || 
      this.avaliacao.idDisciplina == null || this.avaliacao.nota == null){
        alert("Preencha Todos os Campos")
        return;
    }

    this.service.cadastrar(this.avaliacao)
    .subscribe(data => {
      alert("Cadastrado com Sucesso!");
      this.router.navigate(["avaliacoes"]);
    },
    err => {
      if(err.error.errors){
        alert(err.error.errors[0].defaultMessage);
        return;
      }
      alert(err.error.message);
    })
  }

}
