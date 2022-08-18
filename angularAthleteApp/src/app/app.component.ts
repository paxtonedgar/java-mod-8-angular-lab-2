import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAthleteApp';
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
  
}

interface Athlete{
  name: string;
  sport: string;
  isActive: boolean;
}
