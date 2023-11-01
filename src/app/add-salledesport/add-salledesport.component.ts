import { Component } from '@angular/core';
import{salledesport} from '../model/salledesport.model'
import { SalledesportService } from '../services/salledesport.service';
import { Categorie } from '../model/categorie.model';
import { ActivatedRoute ,Router} from '@angular/router';



@Component({
  selector: 'app-add-salledesport',
  templateUrl: './add-salledesport.component.html',
  styleUrls: ['./add-salledesport.component.css']
})
export class AddSalledesportComponent {
  newsalledesport= new salledesport();
  categories! : Categorie[];
  newIdCat!:number;
  newCategorie!: Categorie;
  constructor(private salledesportservice:SalledesportService,
    private router : Router)  {}
  ngOnInit() {
    this.categories = this.salledesportservice.listeCategories();
    }
    
  addsalledesport(){
    console.log(this.newIdCat);
    this.newCategorie=this.salledesportservice.consulterCategorie(this.newIdCat);
    this.newsalledesport.categorie=this.newCategorie;
    this.salledesportservice.ajoutersalledesport(this.newsalledesport);
    this.router.navigate(['salledesport']);

    }
}
