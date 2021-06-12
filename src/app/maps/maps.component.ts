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
produits:Produit[];
  constructor( private produitService: ProduitService) { }

  ngOnInit() {
      this.produit=new Produit();
this.read();

  }
  save()
  {
      let pr=Object.assign({},this.produit);
      this.produitService.create_NewProduit(pr);
      alert("ajouté avec succés");
      this.produit=new Produit();

  }
  read()
  {
    this.produitService.read_Produits().subscribe(data => {
  
      this.produits = data.map(e => {
        return {
         id: e.payload.doc.id,
  
         titre: e.payload.doc.data()["titre"],
         description: e.payload.doc.data()["description"],
         prix: e.payload.doc.data()["prix"],
         codebarre: e.payload.doc.data()["codebarre"],
         direction: e.payload.doc.data()["direction"],
        
  
  
  
        };
      });
      console.log(this.produits);
  
    });
  
  
  }
  delete(id)
  {
if(confirm("vous voulez supprimer?"))
{
  this.produitService.delete_Produit(id);
  
}


  }

}
