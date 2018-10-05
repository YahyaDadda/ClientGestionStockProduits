import { Injectable } from "@angular/core";
import { Produit } from "../shared/produit";

@Injectable()
export class ProduitMockService {
    private PRODUITS: Produit[] = [];
    constructor() {
        let p1: Produit = new Produit('Livre', 50, 100);
        let p2: Produit = new Produit('Ordinateur', 20, 5000);
        let p3: Produit = new Produit('Table', 5, 300);
        let p4: Produit = new Produit('Television', 15, 7000);
        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);
        this.PRODUITS.push(p4);
    }
    public getProduit(): Produit[] {
        return this.PRODUITS;
    }
}