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

  aluno: Aluno = new Aluno();
  constructor(private router:Router, private service:DisciplinaService) { }

  ngOnInit() {
  }

  // RealizarMatricula(aluno: Aluno){
  //   this.service.realizarMatricula(aluno)
  //   .subscribe(data => {
  //     this.aluno = data;
  //     alert("Matriculado com Sucesso!!!");
  //     this.router.navigate[("disciplinas")];
  //   })
  // }

}
