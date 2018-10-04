import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regles',
  templateUrl: './regles.component.html',
  styleUrls: ['./regles.component.css']
})
export class ReglesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack(e){ 
    this.router.navigate(['/auth/register'])
  }
  accept(e){ 
    alert('Regle Acepted')
  }
  refuse(e){ 

      alert('Regle Refused')
  }

}
