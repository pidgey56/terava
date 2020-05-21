import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p5',
  templateUrl: './p5.component.html',
  styleUrls: ['./p5.component.scss']
})
export class P5Component implements OnInit {

  size = true;
  constructor() { }
  slideIndex = 1;
  ngOnInit(): void {

    //cette ligne est pour le slider d'images
    this.showDivs(this.slideIndex);

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


//la c'est des fonctions qu'utilise le slider d'image
  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }
  
  currentDiv(n) {
    this.showDivs(this.slideIndex = n);
  }
  
  showDivs(n) {
    let i;
    let x = [
      document.getElementById("1"),
      document.getElementById("2"),
      document.getElementById("3")
    ];
    if (n > x.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      
      x[i].style.display = "none";  
    }

    x[this.slideIndex-1].style.display = "block";  
  }
}

