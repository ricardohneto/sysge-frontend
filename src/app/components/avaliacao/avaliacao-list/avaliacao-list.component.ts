import { Avaliacao } from './../../../models/Avaliacao';
import { AvaliacaoService } from './../../../services/avaliacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliacao-list',
  templateUrl: './avaliacao-list.component.html',
  styleUrls: ['./avaliacao-list.component.css']
})
export class AvaliacaoListComponent implements OnInit {

  avaliacoes: any[];
  constructor(private service:AvaliacaoService, private router:Router) { }

  ngOnInit() {
    this.service.getAvaliacoes()
    .subscribe(data=>{
      this.avaliacoes = data;
    })
  }

  Delete(avaliacao:Avaliacao){
    this.service.deletar(avaliacao)
    .subscribe(data => {
      this.avaliacoes=this.avaliacoes.filter(a=>a!==avaliacao);
      alert("Avaliação Excluida com Sucesso!");
    },
    err => {
      console.log(err); 
      alert(err.error.message); 
    })
  }

}
