import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Isi } from '../isi.model';
import {IsiService}from '../isi.service';
import {Router,ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  isis:Isi[];
  subscription:Subscription;

  constructor(private isiService:IsiService,
  private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.isiService.isisChanged
    .subscribe(
    (isis: Isi[]) => {
      this.isis = isis;
  }
);
this.isis=this.isiService.getIsis();
  }

  onNewIsi(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }




}
