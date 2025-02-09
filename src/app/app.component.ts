import {ChangeDetectorRef, Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { burguers, combos } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  title = 'hamburguer';
  @ViewChild('swiperEl', { static: false }) swiperEl!: ElementRef;
  @ViewChild('swiperEl2', { static: false }) swiperEl2!: ElementRef;

  currentIndexBurguer = 0
  currentIndexCombo = 0

  currentBurguer = burguers[this.currentIndexBurguer]
  currentCombo = combos[this.currentIndexCombo]

  combos = combos
  burguers  = burguers

  constructor(private cdr: ChangeDetectorRef) {}

  indexAux = 0
  ngAfterViewInit(): void {

    const swiper = this.swiperEl.nativeElement.swiper;
    swiper.on("slideChangeTransitionEnd", ()=>{
      if(swiper.swipeDirection == "next"){
        this.changeCurrentBurguer("next");
      }
      if(swiper.swipeDirection == "prev"){
        this.changeCurrentBurguer("prev");
      }

    })
    const swiper2 = this.swiperEl2.nativeElement.swiper;
    swiper2.on("slideChangeTransitionEnd", ()=>{
      if(swiper2.swipeDirection == "next"){
        this.changeCurrentCombo("next");
      }

      if(swiper2.swipeDirection == "prev"){
        this.changeCurrentCombo("prev");
      }

    })


  }

  changeCurrentBurguer(dir:string){
    let dirNumber:number = 0;
    switch(dir){
      case "next":
        dirNumber = 1;
        break;
      case "prev":
        dirNumber = -1;
        break;
    }

    this.currentIndexBurguer = this.currentIndexBurguer + dirNumber

    if(this.currentIndexBurguer >= burguers.length){
      this.currentIndexBurguer = 0
    }
    if(this.currentIndexBurguer < 0){
      this.currentIndexBurguer = burguers.length-1
    }

    this.currentBurguer = burguers[this.currentIndexBurguer]
    this.cdr.detectChanges();
  }

  changeCurrentCombo(dir:string){
    let dirNumber:number = 0;
    switch(dir){
      case "next":
        dirNumber = 1;
        break;
      case "prev":
        dirNumber = -1;
        break;
    }

    this.currentIndexCombo = this.currentIndexCombo + dirNumber

    if(this.currentIndexCombo >= combos.length){
      this.currentIndexCombo = 0
    }
    if(this.currentIndexCombo < 0){
      this.currentIndexCombo = combos.length-1
    }

    this.currentCombo = combos[this.currentIndexCombo]
    this.cdr.detectChanges();
  }

  nextSlide() {
    this.swiperEl.nativeElement.swiper.slideNext();
    this.changeCurrentBurguer("next");
  }

  prevSlide() {
    this.swiperEl.nativeElement.swiper.slidePrev();
    this.changeCurrentBurguer("prev");
  }

  nextSlideCombo() {
    this.swiperEl2.nativeElement.swiper.slideNext();
    this.changeCurrentCombo("next");
  }

}
