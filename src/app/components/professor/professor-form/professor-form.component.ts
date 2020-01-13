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
    this.professorService.cadastrar(this.professor)
    .subscribe(data => {
      alert("Cadastrado com Sucesso!");
      this.router.navigate(["professores"]);
    })
  }

}
