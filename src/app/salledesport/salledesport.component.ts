import { Component } from '@angular/core';
import{salledesport} from '../model/salledesport.model'
import { SalledesportService } from '../services/salledesport.service';

@Component({
  selector: 'app-salledesport',
  templateUrl: './salledesport.component.html',
  styleUrls: ['./salledesport.component.css']
})

export class SalledesportComponent {
  salledesport : salledesport[];
  constructor(private salledesportservice:SalledesportService ) {
    this.salledesport = salledesportservice.listesalledesport();
  
    }
    supprimersalledesport(salledesport: salledesport)
    {
      //console.log(salledesport);
      let conf = confirm("Etes-vous sûr ?");
       if (conf)

      this.salledesportservice.supprimersalledesport(salledesport);
    }
  
    
  
    

  
    
}
