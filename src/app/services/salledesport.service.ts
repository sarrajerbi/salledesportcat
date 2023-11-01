import { Injectable } from '@angular/core';
import { salledesport } from '../model/salledesport.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class SalledesportService {
  salledesport: salledesport[];
  categories : Categorie[];
  constructor() { 
  this.categories=[{idCat : 1, nomCat : "gym"},
  {idCat : 2, nomCat : "fitness"}];
  this.salledesport =[
    {idsalledesport : 1, nomsalledesport : "go gym", capacitesalledesport : 50, dateCreation : new Date("01/14/2011"),categorie:{idCat : 1, nomCat : "gym"}},
    {idsalledesport : 2, nomsalledesport : "4 ever gym", capacitesalledesport : 70, dateCreation : new Date("12/17/2010"),categorie:{idCat : 2, nomCat : "fitness"}},
    {idsalledesport : 3, nomsalledesport:"fitness", capacitesalledesport : 60, dateCreation : new Date("02/20/2020"),categorie:{idCat : 1, nomCat : "gym"}}
     ];}
     listesalledesport():salledesport[]
  
     {
      return this.salledesport;
     }
     ajoutersalledesport(salledesport:salledesport)
     {
      this.salledesport.push(salledesport);
     }
     supprimersalledesport( salledesport:salledesport){
      const index = this.salledesport.indexOf(salledesport, 0);
      if (index > -1) {
      this.salledesport.splice(index, 1);
      }
      //ou Bien
      /* this.salledesport.forEach((cur, index) => {
      if(salldesport.idsalledesport === cur.salledesport) {
      this.salledesport.splice(index, 1);
      }
      }); */
      
      }
    consultersalledesport(id:number): salledesport{
      return this.salledesport.find(p => p.idsalledesport == id)!;
        }
        updatesalledesport(s:salledesport)
        {
        // console.log(s);
        this.supprimersalledesport(s);
        this.ajoutersalledesport(s);
        this.triersalledesport();
        }
        triersalledesport(){
          this.salledesport = this.salledesport.sort((n1,n2) => {
          if (n1.idsalledesport! > n2.idsalledesport!) {
          return 1;
          }
          if (n1.idsalledesport! < n2.idsalledesport!) {
          return -1;
          }
          return 0;
          });
          }
    listeCategories():Categorie[] {
        return this.categories;
      }
    consulterCategorie(id:number): Categorie{
        return this.categories.find(cat => cat.idCat == id)!;
      }
          
        
        
}

