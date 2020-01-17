import { AlunoService } from './../../../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'app/models/Aluno';

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.component.html',
  styleUrls: ['./aluno-edit.component.css']
})
export class AlunoEditComponent implements OnInit {

  aluno: Aluno = new Aluno();
  constructor(private router:Router, private service:AlunoService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    this.aluno = this.service.getAluno();
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

}
