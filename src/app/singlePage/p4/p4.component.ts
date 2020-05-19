import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p4',
  templateUrl: './p4.component.html',
  styleUrls: ['./p4.component.scss']
})
export class P4Component implements OnInit {

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
