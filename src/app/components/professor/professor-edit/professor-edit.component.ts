import { Component, OnInit } from '@angular/core';
import { Professor } from 'app/models/Professor';
import { Router } from '@angular/router';
import { ProfessorService } from 'app/services/professor.service';

@Component({
  selector: 'app-professor-edit',
  templateUrl: './professor-edit.component.html',
  styleUrls: ['./professor-edit.component.css']
})
export class ProfessorEditComponent implements OnInit {

  professor: Professor = new Professor();
  constructor(private router:Router, private service:ProfessorService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let matricula = localStorage.getItem("matricula");
    this.service.getProfessorMatricula(matricula)
    .subscribe(data => {
      this.professor = data;
    })
  }

  Atualizar(professor: Professor){
    this.service.atualizar(professor)
    .subscribe(data => {
      this.professor = data;
      alert("Atualizado com Sucesso!!!");
      this.router.navigate[("professores")];
    })
  }
}
