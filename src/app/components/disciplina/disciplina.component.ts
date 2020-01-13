import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  constructor(private router: Router) { }

  Listar(){
    this.router.navigate(["disciplinas"])
  }

  Detalhes(){
    this.router.navigate(["disciplinas/detalhes"]);
  }

  Cadastrar(){
    this.router.navigate(["disciplinas/cadastrar"]);
  }

  ngOnInit() {
  }

}
