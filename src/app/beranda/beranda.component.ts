import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Beranda} from './beranda.model';
@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

  
selectedBeranda:Beranda;
@Output() featureSelected= new EventEmitter<string>();
onSelect(feature:string){
  this.featureSelected.emit(feature);
}

  berandas:Beranda[]=[
    new Beranda('../src/app/img/pecel.jpg','Pecel Madiun','Pecel adalah makanan yang menggunakan bumbu sambal kacang sebagai bahan utamanya yang dicampur dengan aneka jenis sayuran. Nasi Pecel menjadi icon salah satu kota di Jawa Timur yaitu Kota Madiun, yang dipandang dari setiap sudut kota.'),
    new Beranda('../src/app/img/pesilat.jpg','Kampung Pesilat','Kabupaten Madiun bakal ditetapkan sebagai kampung pencak silat sedunia mengingat salah satu kota di Jawa Timur ini memiliki banyak perguruan yang saat ini sudah tergabung dalam satu adah yaitu Paguyuban Kampung Pesilat.'),
    new Beranda('../src/app/img/brem.jpg','Brem','Brem adalah makanan yang berasal dari sari ketan yang dimasak dan dikeringkan, merupakan hasil dari fermentasi ketan hitam yang diambil sarinya saja yang kemudian diendapkan dalam waktu sekitar sehari semalam.')

   
    ];
  
    constructor() { }
  
   

  ngOnInit() {
  }

}