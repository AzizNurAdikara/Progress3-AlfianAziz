import { Injectable } from '@angular/core';
import { Isi } from '../isi/isi.model';
import { Subject } from 'rxjs/Subject';
import { Komentar } from '../shared/komentar.model';
import { KomentarService } from '../komentar/komentar.service';

@Injectable(

)
export class IsiService {
  isisChanged = new Subject<Isi[]>();

  private isis:Isi[]=[
    new Isi('Waduk Bening Saradan',
  'Bendungan atau waduk Bening Widas, terletak di perbatasan Kabupaten Madiun dan Kabupaten Nganjuk, tepatnya du dusun Petung, desa Pajaran, Kecamatan Sadaran, 40 km dari kota Madiun.',
'../src/app/img/bening.jpg',[
  new Komentar ('Aziz','bfueffuef'),
  new Komentar ('Gustaf','efeefege')
]),
new Isi('Rekor Nasi Pecel Terbanyak',
'Rekor dunia pecah di Kota Madiun! Sebanyak 16.825 pincuk nasi pecel yang disajikan di sepanjang Jalan Pahlawan kemarin pagi (22/6) tercatat sebagai yang terbanyak sejagat. Catatan itu sekaligus mematahkan rekor sebelumnya yang dipegang Kabupaten Blitar pada 2016 lalu',
'http://kabare.id/uploads/article/20180623214650_5b2e5d5a76928_photo.jpg',[
new Komentar ('Sri','bfueffuef'),
new Komentar ('Paijo','efeefege')
]),
new Isi('Taman Wisata Umbul',
'Taman yang berlokasi di selatan Kota Madiun ini berada di desa Glonggong, kecamatan Dolopo dan berjarak 20 km dari pusat kota. Dari jalan raya Madiun - Ponorogo berjarak 100 meter. Taman rekreasi umbul ini merupakan merupakan taman peninggalan Belanda yang digunakan untuk peristirahatan dan merupakan taman rekreasi tertua di Kabupaten Madiun.',
'../src/app/img/umbul.jpg',[
new Komentar ('Sri','bfueffuef'),
new Komentar ('Paijo','efeefege')
]),
  ];  
  getIsis(){
    return this.isis.slice();
  }
  addKomentarsKomentar(komentar: Komentar[]){
    this.kmService.addKomentars(komentar);
  }

  getIsi(index:number){
    return this.isis[index];
  }

  addIsi (isi:Isi){
    this.isis.push(isi);
    this.isisChanged.next(this.isis.slice());
  }
  
  updateIsi(index: number, newIsi: Isi){
    this.isis[index] = newIsi;
    this.isisChanged.next(this.isis.slice());
  }

  deleteIsi(index: number){
    this.isis.splice(index, 1);
    this.isisChanged.next(this.isis.slice());
  }


constructor(private kmService:KomentarService) { }
setIsis(isis:Isi[]){
  this.isis=isis;
  this.isisChanged.next(this.isis.slice());
}

}
