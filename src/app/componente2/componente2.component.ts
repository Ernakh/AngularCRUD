import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit
{

  pessoas =
  [
    {nome: "Fabrício", papel:"professor"},
    {nome: "Reiner", papel:"professor"},
    {nome: "Cesar", papel:"aluno"},
    {nome: "Vitor", papel:"aluno"},
    {nome: "Augusto", papel:"aluno"},
    {nome: "Juliano", papel:"aluno"},
    {nome: "Wagner", papel:"aluno"},
    {nome: "Rafael", papel:"aluno"},
    {nome: "Roberta", papel:"aluno"},
    {nome: "Ruan", papel:"aluno"},
    {nome: "Gabriel", papel:"aluno"}
  ];

  constructor() { }

  ngOnInit(): void
  {
  }

}
