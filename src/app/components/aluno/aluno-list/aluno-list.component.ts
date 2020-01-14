import { Aluno } from 'app/models/Aluno';
import { AlunoService } from './../../../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {

  alunos: any[];
  constructor(private service:AlunoService, private router:Router) { }

  ngOnInit() {
    this.service.getAlunos()
    .subscribe(data=>{
      this.alunos = data;
    })
  }

  Editar(aluno:Aluno){
    this.service.setAluno(aluno);
    this.router.navigate(['/alunos/editar']);
  }

  Delete(aluno:Aluno){
    this.service.deletar(aluno)
    .subscribe(data => {
      this.alunos=this.alunos.filter(a=>a!==aluno);
      alert("Aluno Excluido com Sucesso!");
    })
  }

}
