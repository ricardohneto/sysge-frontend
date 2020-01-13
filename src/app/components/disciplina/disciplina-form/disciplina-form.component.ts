import { DisciplinaService } from './../../../services/disciplina.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Disciplina } from 'app/models/Disciplina';

@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.css']
})
export class DisciplinaFormComponent implements OnInit {

  constructor(private router:Router, private disciplinaService:DisciplinaService) { }

  disciplina: Disciplina = new Disciplina();

  ngOnInit() {
  }

  Cadastrar(){
    this.disciplinaService.cadastrar(this.disciplina)
    .subscribe(data => {
      alert("Cadastrada com Sucesso!");
      this.router.navigate(["disciplinas"]);
    })
  }

}
