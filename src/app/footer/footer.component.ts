import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() { }
  faPhone=faPhone;
  faEnvelope=faEnvelope;
  ngOnInit(): void {
  }
  }

