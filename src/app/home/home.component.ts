import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  eventHighlightsSlides = [
    {
      id: 1,
      src:'assets/images/project/style2/1.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      src:'assets/images/project/style2/2.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      src:'assets/images/project/style2/3.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      src:'assets/images/project/style2/4.jpg',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      src:'assets/images/project/style2/5.jpg',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: 6,
      src:'assets/images/project/style2/6.jpg',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: 7,
      src:'assets/images/project/style2/7.jpg',
      alt:'Side 5',
      title:'Side 5'
    }
  ]

  upComingEventsSlides = [
    {
      id: 1,
      src:'assets/images/blog/1.jpg',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      src:'assets/images/blog/2.jpg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      src:'assets/images/blog/3.jpg',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      src:'assets/images/blog/4.jpg',
      alt:'Side 4',
      title:'Side 4'
    }
  ]

  youtubeVideosSlides = [
    {
      id: 1,
      imgsrc:'assets/images/sddefault.jpg',
      title:'How To Decorate With Black-and-White?',
      datetime: "june, 24th 2016"
    },
    {
      id: 2,
      imgsrc:'assets/images/sddefault-2.jpg',
      title:'How To Decorate With Black-and-White?',
      datetime: "june, 24th 2016"
    },
    {
      id: 3,
      imgsrc:'assets/images/sddefault-3.jpg',
      title:'How To Decorate With Black-and-White?',
      datetime: "june, 24th 2016"
    }
  ]

  futureEvents = [
    {
      id: 1,
      day:"07",
      month:"January",
      year: "2024",
      name: "Student Festival",
      description: "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.",
      location: "Grand Central Park",
      imgsrc:'assets/images/events1.jpg',
    },
    {
      id: 2,
      day:"07",
      month:"January",
      year: "2024",
      name: "Student Festival",
      description: "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.",
      location: "Grand Central Park",
      imgsrc:'assets/images/events2.jpg',
    },
    {
      id: 3,
      day:"07",
      month:"January",
      year: "2024",
      name: "Student Festival",
      description: "In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.",
      location: "Grand Central Park",
      imgsrc:'assets/images/events3.jpg',
    }
  ]

  constructor() { } 
  ngOnInit(): void {
      
  }

  eventHighlightsOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    lazyLoad: true,
    dots: true,
    nav: false,
    navSpeed: false,
    navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
    center: false,
    autoplayHoverPause: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        center: false,
      },
      768: {
          items: 2,
          nav: false,
          dots: true,
          center: false,
      },
      992: {
          items: 2,
          nav: false,
          dots: true,
          center: false,
      },
      1200: {
          items: 5,
          nav: false,
          dots: true,
      }
    }
  }

  upComingEventsOptions: OwlOptions = {
    // loop: true,
    items: 3,
    // lazyLoad: true,
    center: false,
    autoplayHoverPause: false,
    margin: 10,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    dots: true,
    nav: false,
    navSpeed: false,
    navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        center: false,
      },
      768: {
          items: 2,
          nav: false,
          dots: true,
          center: false,
      },
      992: {
          items: 3,
          nav: false,
          dots: true,
          center: false,
      },
      1200: {
          items: 3,
          nav: false,
          dots: true,
      }
    }
  }

  yotubeVideosOptions: OwlOptions = {
    // loop: true,
    items: 3,
    // lazyLoad: true,
    center: false,
    autoplayHoverPause: false,
    margin: 10,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    dots: true,
    nav: false,
    navSpeed: false,
    navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        center: false,
      },
      768: {
          items: 2,
          nav: false,
          dots: true,
          center: false,
      },
      992: {
          items: 3,
          nav: false,
          dots: true,
          center: false,
      },
      1200: {
          items: 3,
          nav: false,
          dots: true,
      }
    }
  }
}
