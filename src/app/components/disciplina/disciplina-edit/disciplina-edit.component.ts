import { DisciplinaService } from 'app/services/disciplina.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Disciplina } from 'app/models/Disciplina';

@Component({
  selector: 'app-disciplina-edit',
  templateUrl: './disciplina-edit.component.html',
  styleUrls: ['./disciplina-edit.component.css']
})
export class DisciplinaEditComponent implements OnInit {

  disciplina: Disciplina = new Disciplina();
  constructor(private router:Router,private service: DisciplinaService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    this.disciplina = this.service.getDisciplina();
  }

  Atualizar(disciplina:Disciplina) {

    if(disciplina.nome == "" || disciplina.descricao == "" || 
      disciplina.cargaHoraria == 0 || disciplina.idProfessor == ""){
        alert("Preencha Todos os Campos")
        return;
    }

    this.service.atualizar(disciplina)
    .subscribe(data => {
      this.disciplina = data;
      alert("Atualizado Com Sucesso!!!");
      this.router.navigate(["disciplinas"]);
    },
    err => {
      if(err.error.errors[0]){
        alert(err.error.errors[0].defaultMessage);
        return;
      }
      alert(err.error.message); 
    })
  }

}
