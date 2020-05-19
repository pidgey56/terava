import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p5',
  templateUrl: './p5.component.html',
  styleUrls: ['./p5.component.scss']
})
export class P5Component implements OnInit {

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
