import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CommonModule, RouterModule]
})
export class Home implements OnInit {
  imagenes: string[] = [
    'chichen.jpg',
    'cristo.jpg',
    'machu.jpg',
    'coliseo.jpg',
    'tajmahal.jpg',
    'petra.jpg',
    'granmuralla.jpg'
  ];

  indiceActual = 0;

  ngOnInit() {
    setInterval(() => this.avanzar(), 5000); // cambia cada 5s automáticamente
  }

  avanzar() {
    this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
  }

  retroceder() {
    this.indiceActual =
      (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
  }
}