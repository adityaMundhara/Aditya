import { Component, OnInit } from '@angular/core';
import { faLinkedinIn,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-resume-component',
  templateUrl: './resume-component.component.html',
  styleUrls: ['./resume-component.component.scss']
})
export class ResumeComponentComponent implements OnInit {
  faEnvelope=faEnvelope;
  faLinkedinIn=faLinkedinIn;
  faGithub=faGithub;
  constructor() { }
  ngOnInit(): void {
  }

}
