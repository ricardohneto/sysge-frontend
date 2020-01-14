import { DisciplinaService } from './../../../services/disciplina.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Disciplina } from 'app/models/Disciplina';

@Component({
  selector: 'app-disciplina-list',
  templateUrl: './disciplina-list.component.html',
  styleUrls: ['./disciplina-list.component.css']
})
export class DisciplinaListComponent implements OnInit {

  disciplinas: any[];
  constructor(private service:DisciplinaService, private router:Router) { }

  ngOnInit() {
    this.service.getDisciplinas()
    .subscribe(data=>{
      this.disciplinas = data;
    })
  }

  Editar(disciplina: Disciplina){
    this.service.setDisciplina(disciplina);
    this.router.navigate(["disciplinas/editar"]);
  }

  Delete(disciplina:Disciplina){
    this.service.deletar(disciplina)
    .subscribe(data => {
      this.disciplinas=this.disciplinas.filter(d=>d!==disciplina);
      alert("Disciplina Excluida com Sucesso!");
    })
  }

  Matricular(disciplina:Disciplina){
    this.service.matricular(disciplina);
    this.router.navigate(["disciplinas/matricular"])
  }

}
