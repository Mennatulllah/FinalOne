import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';


@Component({
  selector: 'app-historical-places',
  templateUrl: './historical-places.component.html',
  styleUrls: ['./historical-places.component.css']
})
export class HistoricalPlacesComponent implements OnInit {

  Places: any = [];
  places:any[]=[];

  constructor(private placServ: PlacesService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.placServ.getPlaces().subscribe(Places => {
      console.log(Places);
      this.places =  Places.filter(a=>a.ZoneType._id == '593d15f0f42aa705e01002d3');
      console.log(this.places);
    });

}

}
