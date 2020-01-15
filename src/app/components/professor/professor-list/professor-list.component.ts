import { Router } from '@angular/router';
import { ProfessorService } from './../../../services/professor.service';
import { Component, OnInit } from '@angular/core';
import { Professor } from 'app/models/Professor';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  professores: any[];
  constructor(private service:ProfessorService, private router:Router) { }

  ngOnInit() {
    this.service.getProfessores()
    .subscribe(data=>{
      this.professores = data;
    })
  }

  Editar(professor:Professor){
    this.service.setProfessor(professor);
    this.router.navigate(["professores/editar"]);
  }

  Delete(professor:Professor){
    this.service.deletar(professor)
    .subscribe(data => {
      this.professores=this.professores.filter(p=>p!==professor);
      alert("Professor Excluido com Sucesso!");
    },
    err => {
      console.log(err);
      alert(err.error.message); 
    })
  }

}
