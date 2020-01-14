import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'app/services/aluno.service';
import { Router } from '@angular/router';
import { Aluno } from 'app/models/Aluno';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css']
})
export class AlunoDetailComponent implements OnInit {

  alunos: any[];
  constructor(private service:AlunoService, private router:Router) { }

  ngOnInit() {
    this.service.getAlunosDetalhes()
    .subscribe(data=>{
      this.alunos = data;
    })
  }

}
