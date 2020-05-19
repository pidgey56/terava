import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p8',
  templateUrl: './p8.component.html',
  styleUrls: ['./p8.component.scss']
})
export class P8Component implements OnInit {


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
