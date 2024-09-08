import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name : string;
  constructor(){
    // Init.
    this.name = 'Omar'
    console.log("CONSTRUCTOR")
  }

  ngOnInit(){
    // API. call
    console.log('On Init')
  }

  ngDoCheck(){
    // Changes component poroperties
  }

  ngOnDestroy(){
    // Clean up method
    // When component removed( destroyed )
  }
}
