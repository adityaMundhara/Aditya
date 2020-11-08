import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  angular=80;
  typescript=80;
  docker = 70;
  d3=60;
  ngrx=60;
  cpp=40;
  git=50;
  node=70;
  postgres=70;
  ngOnInit(): void {
  }
public downloadRes(){
  var anchor=document.createElement('a');
    	anchor.setAttribute('href','./../../assets/aditya_mundhara.docx');
    	anchor.setAttribute('download','');
    	document.body.appendChild(anchor);
    	anchor.click();
    	anchor.parentNode.removeChild(anchor);
}
}
