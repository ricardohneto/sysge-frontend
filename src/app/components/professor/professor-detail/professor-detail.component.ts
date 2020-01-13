import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'app/services/professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-detail',
  templateUrl: './professor-detail.component.html',
  styleUrls: ['./professor-detail.component.css']
})
export class ProfessorDetailComponent implements OnInit {

  professores: any[];
  constructor(private service:ProfessorService, private router:Router) { }

  ngOnInit() {
    this.service.getProfessoresDetalhes()
    .subscribe(data=>{
      this.professores = data;
    })
  }

}
