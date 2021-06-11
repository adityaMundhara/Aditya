import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(titleService: Title) {
    var i = 0;
    var words: string[] = [
      '👨‍💻 Aditya 👨‍💻',
      '💻 Developer 💻',
      'Angular',
      'Node.js',
      'NGRX/NGXS',
      'Ts/Js',
      'C++',
      'D3.js,HighCharts,Canvas',
      'Docker',
    ];
    titleService.setTitle(words[i]);

    setInterval(() => {
      if (i === words.length) {
        i = 0;
      }
      titleService.setTitle(words[i]);
      i++;
    }, 1500);
  }
  ngOnInit(){
    window.addEventListener("mousemove", function (e) {
      var to_append = Array.from(document.getElementsByClassName('cursor')) as Array<HTMLElement>;
      for(let a  of to_append){
        a.style.left = (e.clientX)+'px';
        a.style.top = (e.clientY)+'px';
      }    

    });
  }
}
