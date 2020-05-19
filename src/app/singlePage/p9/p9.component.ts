import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p9',
  templateUrl: './p9.component.html',
  styleUrls: ['./p9.component.scss']
})
export class P9Component implements OnInit {
  constructor() { }
  size = true;

  ngOnInit(): void {    //initialisation
    
    if(window.innerHeight>window.innerWidth){
      this.size = false;
    }
    //apres
    window.addEventListener("resize", () => {
      console.log("resized")
      if(window.innerHeight>window.innerWidth){
        this.size = false;
      }
      else{
        this.size= true;
      }
    })
  }
}
