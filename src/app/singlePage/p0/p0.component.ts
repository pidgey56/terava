import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p0',
  templateUrl: './p0.component.html',
  styleUrls: ['./p0.component.scss']
})
export class P0Component implements OnInit {

  size = true;
  constructor() { }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  slideIndex = 1;
  ngOnInit(): void {

    
    this.showDivs(this.slideIndex);
    
   





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

