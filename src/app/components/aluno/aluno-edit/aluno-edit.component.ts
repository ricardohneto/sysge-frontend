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
    let matricula = localStorage.getItem("matricula");
    this.service.getAlunoMatricula(matricula)
    .subscribe(data => {
      this.aluno = data;
    })
  }

  Atualizar(aluno: Aluno){
    this.service.atualizar(aluno)
    .subscribe(data => {
      this.aluno = data;
      alert("Atualizado com Sucesso!!!");
      this.router.navigate(["alunos"]);
    })
  }

}
