import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Komentar } from '../shared/komentar.model';
import { KomentarService } from './komentar.service';

@Component({
  selector: 'app-komentar',
  templateUrl: './komentar.component.html',
  styleUrls: ['./komentar.component.css']
})

export class KomentarComponent implements OnInit, OnDestroy {
  komentars:Komentar[]
  private subscription:Subscription;
  constructor(private kmService:KomentarService) { }

  ngOnInit() {
    this.komentars=this.kmService.getKomentars();
    this.subscription = this.kmService.KomentarChange
    .subscribe(
      (Komentar:Komentar[])=>{
        this.komentars=Komentar;
      }
    );
  }
  onEditItem(index: number) {
    this.kmService.startedEditing.next(index);
  }

  ngOnDestroy() { 
    this.subscription.unsubscribe();
  } 

}
