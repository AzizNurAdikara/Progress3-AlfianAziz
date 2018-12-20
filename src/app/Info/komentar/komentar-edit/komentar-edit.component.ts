import { Component, OnInit,OnDestroy, Output, EventEmitter, ViewChild } from '@angular/core'; 
import { Komentar } from '../../shared/komentar.model';
import { KomentarService }from '../komentar.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-komentar-edit',
  templateUrl: './komentar-edit.component.html',
  styleUrls: ['./komentar-edit.component.css']
})
export class KomentarEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') kmForm: NgForm;
  subscription: Subscription;
  editMode=false;
  editedItemIndex: number;
  editedItem:Komentar;

  constructor(private kmService:KomentarService) { }

  ngOnInit() {
    this.subscription = this.kmService.startedEditing
    .subscribe(
      (index: number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem = this.kmService.getKomentar(index);
        this.kmForm.setValue({
          name: this.editedItem.name,
          isikomentar: this.editedItem.isikomentar
        })
      }
    );
  }
  onSubmit(form: NgForm){ 
    const value = form.value;
    const newKomentar= new Komentar(value.name, value.isikomentar);
    if (this.editMode){
      this.kmService.updateKomentar(this.editedItemIndex,newKomentar)
    }
    else{
      this.kmService.addKomentar(newKomentar);
    }
    this.editMode = false;
    form.reset();
  }
  onClear(){
    this.kmForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.kmService.deleteKomentar(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
