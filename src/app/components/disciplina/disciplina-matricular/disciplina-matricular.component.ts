import { DisciplinaService } from './../../../services/disciplina.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'app/models/Aluno';
import { Router } from '@angular/router';
import { Disciplina } from 'app/models/Disciplina';

@Component({
  selector: 'app-disciplina-matricular',
  templateUrl: './disciplina-matricular.component.html',
  styleUrls: ['./disciplina-matricular.component.css']
})
export class DisciplinaMatricularComponent implements OnInit {

  private disciplina: Disciplina = new Disciplina();
  private matricula: String;
  constructor(private router:Router, private service:DisciplinaService) { }

  ngOnInit() {
  }

  RealizarMatricula(){
    this.disciplina = this.service.getDisciplina();
    this.service.matricular(this.disciplina, this.matricula)
    .subscribe(data => {
      this.disciplina = data;
      alert("Matriculado com Sucesso!!!");
      this.router.navigate(["disciplinas"]);
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
