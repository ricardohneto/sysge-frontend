import { AlunoService } from './../../../services/aluno.service';
import { DisciplinaService } from './../../../services/disciplina.service';
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

  constructor(private router: Router, 
    private avaliacaoService: AvaliacaoService, 
    private disciplinaService: DisciplinaService,
    private alunoService: AlunoService) { }

  avaliacao: Avaliacao = new Avaliacao();
  disciplinas: any[];
  alunos: any[];

  ngOnInit() {
    this.disciplinaService.getDisciplinas()
    .subscribe(data=>{
      this.disciplinas = data;
    })

    this.alunoService.getAlunos()
    .subscribe(data=>{
      this.alunos = data;
    })

    this.Editar();

  }

  Editar(){
    this.avaliacao = this.avaliacaoService.getAvaliacao();
    this.avaliacaoService.setAvaliacao(new Avaliacao());
  }

  Atualizar(avaliacao: Avaliacao){

    if(this.avaliacao.dataAplicacao == null || this.avaliacao.nota == undefined){
        alert("Preencha Todos os Campos")
        return;
    }

    this.avaliacaoService.atualizar(avaliacao)
    .subscribe(data => {
      this.avaliacao = data;
      alert("Atualizado com Sucesso!!!");
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


  Cadastrar(){
    
    if(this.avaliacao.dataAplicacao == null || this.avaliacao.idAluno == null || 
      this.avaliacao.idDisciplina == null || this.avaliacao.nota == null){
        alert("Preencha Todos os Campos")
        return;
    }

    this.avaliacaoService.cadastrar(this.avaliacao)
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
