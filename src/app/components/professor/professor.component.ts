import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor(private router: Router) { }

  Listar(){
    this.router.navigate(["professores"])
  }

  Detalhes(){
    this.router.navigate(["professores/detalhes"]);
  }

  Cadastrar(){
    this.router.navigate(["professores/cadastrar"]);
  }
  ngOnInit() {
  }

}
