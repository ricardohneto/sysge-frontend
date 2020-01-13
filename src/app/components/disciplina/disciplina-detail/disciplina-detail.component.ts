import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from 'app/services/disciplina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplina-detail',
  templateUrl: './disciplina-detail.component.html',
  styleUrls: ['./disciplina-detail.component.css']
})
export class DisciplinaDetailComponent implements OnInit {

  disciplinas: any[];
  constructor(private service:DisciplinaService, private router:Router) { }

  ngOnInit() {
    this.service.getDisciplinasDetalhes()
    .subscribe(data=>{
      this.disciplinas = data;
    })
  }

}
