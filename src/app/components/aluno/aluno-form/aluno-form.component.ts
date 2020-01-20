import { Aluno } from '../../../models/Aluno';
import { AlunoService } from './../../../services/aluno.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  constructor(private router:Router, private service:AlunoService) { }
  
  aluno: Aluno = new Aluno();
 
  ngOnInit() {
    this.Editar();
  }

  Editar(){
    this.aluno = this.service.getAluno();
    this.service.setAluno(new Aluno());
  }

  Atualizar(aluno: Aluno){

    if(aluno.cpf == "" || aluno.matricula == "" || 
      aluno.dataNascimento.toString() == "" || aluno.nome == ""){
        alert("Preencha Todos os Campos")
        return;
    }

    this.service.atualizar(aluno)
    .subscribe(data => {
      this.aluno = data;
      alert("Atualizado com Sucesso!!!");
      this.router.navigate(["alunos"]);
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
    
    if(this.aluno.cpf == null || this.aluno.matricula == null || 
      this.aluno.dataNascimento == null || this.aluno.nome == null){
        alert("Preencha Todos os Campos")
        return;
    }

    this.service.cadastrar(this.aluno)
    .subscribe(data => {
      alert("Cadastrado com Sucesso!");
      this.router.navigate(["alunos"]);
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
