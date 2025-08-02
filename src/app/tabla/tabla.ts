import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

interface Pais {
  id: string;
  nombre: string;
  capital: string;
  moneda: string;
}

@Component({
  selector: 'tabla-paises',
  standalone: true,
  templateUrl: './tabla.html',
  styleUrls: ['./tabla.css'],
  imports: [CommonModule, FormsModule]
})
export class Tabla implements OnInit {
  paises: Pais[] = [];
  searchTerm: string = '';
  paisesFiltrados: Pais[] = [];

  async ngOnInit() {
    try {
      const response = await axios.get<Pais[]>('http://localhost:3000/paises'); // ajusta la URL a tu API real
      this.paises = response.data;
      this.paisesFiltrados = this.paises;
    } catch (error) {
      console.error('Error al cargar los países:', error);
    }
  }

  filtrar() {
    const term = this.searchTerm.toLowerCase();
    this.paisesFiltrados = this.paises.filter(p =>
      p.id.toLowerCase().includes(term) ||
      p.nombre.toLowerCase().includes(term) ||
      p.capital.toLowerCase().includes(term) ||
      p.moneda.toLowerCase().includes(term)
    );
  }
}