import { Aluno } from '../../../models/Aluno';
import { AlunoService } from './../../../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  constructor(private router:Router, private alunoService:AlunoService) { }
  
  aluno: Aluno = new Aluno();
 
  ngOnInit() {
  }

  Cadastrar(){
    this.alunoService.cadastrar(this.aluno)
    .subscribe(data => {
      alert("Cadastrado com Sucesso!");
      this.router.navigate(["alunos"]);
    })
  }

}
