import { Component, Input } from '@angular/core';
import { NgIf, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { Produit } from '../produit.model';


@Component({
   selector: 'app-detail-produit',
   standalone: true,
   imports: [
    NgIf,
    UpperCasePipe,
    CurrencyPipe
   ],
   templateUrl: './detail-produit.component.html',
   styleUrl: './detail-produit.component.css'
 })
 export class DetailProduitComponent {
  @Input() Produit!: Produit; // Utiliser l'interface Product
}
