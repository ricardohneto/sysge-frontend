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

  constructor(private router:Router, private professorService:ProfessorService) { }

  professor: Professor = new Professor();

  ngOnInit() {
  }

  Cadastrar(){

    if(this.professor.area == null || this.professor.matricula == null || 
      this.professor.dataNascimento == null || this.professor.nome == null){
        alert("Preencha Todos os Campos")
        return;
    }

    this.professorService.cadastrar(this.professor)
    .subscribe(data => {
      alert("Cadastrado com Sucesso!");
      this.router.navigate(["professores"]);
    },
    err => {
      if(err.error.errors[0]){
        alert(err.error.errors[0].defaultMessage);
        return;
      }
      alert(err.error.message); 
    })
  }

}
