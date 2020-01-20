import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {

  constructor(private router:Router) { }

  Listar(){
    this.router.navigate(["avaliacoes"])
  }

  Cadastrar(){
    this.router.navigate(["avaliacoes/cadastrar"]);
  }

  ngOnInit() {
  }

}
