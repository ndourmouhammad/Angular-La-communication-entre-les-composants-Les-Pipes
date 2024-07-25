import { Component } from '@angular/core';
import { NgFor, UpperCasePipe, CurrencyPipe, NgIf } from '@angular/common';
import { DetailProduitComponent } from '../detail-produit/detail-produit.component';
import { Produit } from '../produit.model';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    UpperCasePipe,
    CurrencyPipe,
    DetailProduitComponent
  ],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  // créer un tabeau de produits
  produits: Produit[] = [
    { id: 1, libelle: 'Pomme', prix: 1.99, description: 'Une super pomme', image: 'https://cdn.pixabay.com/photo/2019/03/14/21/15/apple-4055926_1280.jpg', quantite: 15 },
    { id: 2, libelle: 'Banane', prix: 0.99, description: 'Une super banane', image: 'https://cdn.pixabay.com/photo/2011/03/24/10/12/banana-5734_1280.jpg', quantite: 5 },
    { id: 3, libelle: 'Poire', prix: 0.99, description: 'Une super poire', image: 'https://cdn.pixabay.com/photo/2017/05/09/11/02/pear-2297977_1280.jpg', quantite: 5 },
    { id: 4, libelle: 'Cerise', prix: 0.99, description: 'Une super cerise', image: 'https://cdn.pixabay.com/photo/2017/07/30/13/35/cherry-2554364_1280.jpg', quantite: 5 },
    { id: 5, libelle: 'Fraise', prix: 0.99, description: 'Une super fraise', image: 'https://cdn.pixabay.com/photo/2017/01/06/23/53/strawberry-1959377_1280.jpg', quantite: 5 },
    { id: 6, libelle: 'Pamplemousse', prix: 0.99, description: 'Une super pamplemousse', image: 'https://cdn.pixabay.com/photo/2022/12/21/12/33/orange-7669963_1280.jpg', quantite: 5 },
  ];

  selectedProduct: Produit | null = null; // Utiliser l'interface Product

  selectProduct(produit: Produit) {
    this.selectedProduct = produit;
  }

  deselectProduct() {
    this.selectedProduct = null;
  }
}
