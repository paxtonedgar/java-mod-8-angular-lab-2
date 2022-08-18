import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularAthleteApp';
  newName = "";
  newSport = "";
  newIsActive = false;

  athleteArray: Athlete[] = [
    { name: "Michael Jordan",
      sport: "Basketball",
      isActive: false
    },

    { name: "TJ Watt",
      sport: "Football",
      isActive: true
    },

    { name: "Ed Reed",
      sport: "Football",
      isActive: false
    }
  ];

  createAthlete(){
    let athlete:Athlete = {
      name: this.newName,
      sport: this.newSport,
      isActive: this.newIsActive
    }
    this.athleteArray.push(athlete);
  }
  
}


interface Athlete{
  name: string;
  sport: string;
  isActive: boolean;
}
