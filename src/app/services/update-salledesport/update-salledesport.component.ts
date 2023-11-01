import { Component } from '@angular/core';
import { SalledesportService } from '../salledesport.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { salledesport } from 'src/app/model/salledesport.model';
import { Categorie } from 'src/app/model/categorie.model';

@Component({
  selector: 'app-update-salledesport',
  templateUrl: './update-salledesport.component.html',
  styleUrls: ['./update-salledesport.component.css']
})
export class UpdateSalledesportComponent {
  currentsalledesport =new salledesport();
  categories! : Categorie[];
  updatedCatId! : number;

  constructor(private activateRoute: ActivatedRoute,
    private router :Router,
    private salledesportService: SalledesportService) { }
    ngOnInit() {
      // console.log(this.route.snapshot.params.id);
      this.categories = this.salledesportService.listeCategories();
      this.currentsalledesport = this.salledesportService.consultersalledesport(this.activateRoute.snapshot. params['id']);
      this.updatedCatId=this.currentsalledesport.categorie.idCat;

      } 
    updatesalledesport()
    {
      this.currentsalledesport.categorie=this.salledesportService.consulterCategorie(this.updatedCatId);
      this.salledesportService.updatesalledesport(this.currentsalledesport);
      this.router.navigate(['salledesport']);

    }
  }
      

