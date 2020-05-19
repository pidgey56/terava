import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p10',
  templateUrl: './p10.component.html',
  styleUrls: ['./p10.component.scss']
})
export class P10Component implements OnInit {

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
