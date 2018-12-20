import  { Komentar } from '../shared/komentar.model';
import  { Subject } from 'rxjs/Subject';

export class KomentarService {
  KomentarChange=new Subject<Komentar[]>();
  startedEditing = new Subject<number>(); //menambahkan  startedEditing = new Subject<number>();
  komentars:Komentar[]=[
    new Komentar('Aziz','apa?'),
    new Komentar('Gustaf','netijen'),
  ];

constructor() { }
getKomentars(){
  return this.komentars.slice();
}
getKomentar(index: number){
  return this.komentars[index];
}

addKomentar(komentar:Komentar){
  this.komentars.push(komentar);
  this.KomentarChange.next(this.komentars.slice());
}
addKomentars(komentars:Komentar[]){
  this.komentars.push(...komentars);
  this.KomentarChange.next(this.komentars.slice());
}
updateKomentar(index: number, newKomentar: Komentar){
this.komentars[index]=newKomentar;
this.KomentarChange.next(this.komentars.slice());
}
deleteKomentar(index: number){
  this.komentars.splice(index, 1);
  this.KomentarChange.next(this.komentars.slice());
}
}