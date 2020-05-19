import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.scss']
})
export class P2Component implements OnInit {

  constructor() { }
  size = true;

  ngOnInit(): void {
        //initialisation
    
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
