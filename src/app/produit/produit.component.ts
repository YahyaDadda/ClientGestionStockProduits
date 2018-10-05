import {Component, OnInit} from '@angular/core';
import {Produit} from "../shared/produit";
import { ProduitMockService } from 'src/app/produit/produit.mock.service';

@Component({
    selector: 'app-produit',
    templateUrl: '/produit.component.html',
    styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{

    produits : Produit[];

    constructor(private produitService : ProduitMockService){

    }

    ngOnInit(){
        this.produits = this.produitService.getProduit();
    }

}