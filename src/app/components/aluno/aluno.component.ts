import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor(private router: Router) { }

  Listar(){
    this.router.navigate(["alunos"])
  }

  Detalhes(){
    this.router.navigate(["alunos/detalhes"]);
  }

  Cadastrar(){
    this.router.navigate(["alunos/cadastrar"]);
  }

  ngOnInit() {
  }

}
