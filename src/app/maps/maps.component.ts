import { Component, OnInit } from '@angular/core';
import { Produit } from '../classes/produit';
import { ProduitService } from '../services/produit.service';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
produit:Produit;
  constructor( private produitService: ProduitService) { }

  ngOnInit() {
      this.produit=new Produit();


  }
  save()
  {
      let pr=Object.assign({},this.produit);

  }


}
