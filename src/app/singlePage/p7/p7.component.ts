import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p7',
  templateUrl: './p7.component.html',
  styleUrls: ['./p7.component.scss']
})
export class P7Component implements OnInit {

  size = true;
  constructor() { }
  slideIndex = 1;
  ngOnInit(): void {



    //la c'est pour caché le header quand l'image est trop petite
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

