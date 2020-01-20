import { ProfessorService } from './../../../services/professor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from 'app/models/Professor';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent implements OnInit {

  constructor(private router:Router, private service:ProfessorService) { }

  professor: Professor = new Professor();

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    this.professor = this.service.getProfessor();
    this.service.setProfessor(new Professor());
  }

  Atualizar(professor: Professor){

    if(professor.area == "" || professor.matricula == "" || 
      professor.dataNascimento.toString() == "" || professor.nome == ""){
        alert("Preencha Todos os Campos")
        return;
    }

    this.service.atualizar(professor)
    .subscribe(data => {
      this.professor = data;
      alert("Atualizado com Sucesso!!!");
      this.router.navigate(["professores"]);
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

    if(this.professor.area == null || this.professor.matricula == null || 
      this.professor.dataNascimento == null || this.professor.nome == null){
        alert("Preencha Todos os Campos")
        return;
    }

    this.service.cadastrar(this.professor)
    .subscribe(data => {
      alert("Cadastrado com Sucesso!");
      this.router.navigate(["professores"]);
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
