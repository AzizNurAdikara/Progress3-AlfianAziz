import { Component, OnInit, Input } from '@angular/core';
import { Isi } from '../../isi.model';
import { IsiService } from '../../isi.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() isi:Isi;
  @Input() index:number;

  constructor() { }

  ngOnInit() {
  }

}
