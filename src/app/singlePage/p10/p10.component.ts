import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p10',
  templateUrl: './p10.component.html',
  styleUrls: ['./p10.component.scss']
})
export class P10Component implements OnInit {

  size = true;
  constructor() { }
  slideIndex = 1;
  slideIndex2 = 1;
  ngOnInit(): void {

    //cette ligne est pour le slider d'images
    this.showDivs(this.slideIndex);
    this.showDivs(this.slideIndex2);

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
  
  plusDivs2(n) {
    this.showDivs(this.slideIndex2 += n);
  }
  
  currentDiv(n) {
    this.showDivs(this.slideIndex = n);
  }
  
  currentDiv2(n) {
    this.showDivs(this.slideIndex2 = n);
  }
  
  showDivs2(n){
  
    let i;
    let x = [
      document.getElementById("5"),
      document.getElementById("6"),
      document.getElementById("7"),
      document.getElementById("8"),
    
    ];
    if (n > x.length) {this.slideIndex2 = 1}
    if (n < 1) {this.slideIndex2 = x.length}
    for (i = 0; i < x.length; i++) {
      
      x[i].style.display = "none";  
    }

    x[this.slideIndex2-1].style.display = "block";  
  }
  
  showDivs(n) {
    let i;
    let x = [
      document.getElementById("1"),
      document.getElementById("2"),
      document.getElementById("3"),
      document.getElementById("4"),
    
    ];
    if (n > x.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      
      x[i].style.display = "none";  
    }

    x[this.slideIndex-1].style.display = "block";  
  }
}

