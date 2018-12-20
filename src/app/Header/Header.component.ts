import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
@Output()featureSelected=new EventEmitter<string>();

onSelect(feature:string){
  this.featureSelected.emit(feature);
}

  constructor() { }

  ngOnInit() {
  }

}
