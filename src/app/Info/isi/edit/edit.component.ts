import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params, Router}from '@angular/router';
import{FormGroup, FormControl, FormArray, Validators}from '@angular/forms';
import{IsiService}from '../isi.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:number;
  editMode=false;
  isiForm: FormGroup;

  constructor(private route:ActivatedRoute,
              private isiService: IsiService,
              private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();
      }
    );
  }
  onSubmit(){
    if(this.editMode){
      this.isiService.updateIsi(this.id, this.isiForm.value)
    }else{
      this.isiService.addIsi(this.isiForm.value);
    }
    this.onCancel();
  }

  onAddKomentar(){
    (<FormArray>this.isiForm.get('komentars')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'isikomentar': new FormControl(null, [
          Validators.required,
          Validators.required
        ])
      })
    );
  }


  onDeleteKomentar(index:number){
    (<FormArray>this.isiForm.get('komentars')).removeAt(index);
  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  private initForm(){   
    let isiName= '';
    let isiimagePath= '';
    let isiDescription= '';
    let isiKomentars = new FormArray([]);

    if (this.editMode){
      const isi = this.isiService.getIsi(this.id);
      isiName = isi.name;
      isiimagePath = isi.imagePath;
      isiDescription = isi.description;
      if (isi ['komentars']){
        for(let komentar of isi.komentars){
          isiKomentars.push(
            new FormGroup({
              'name' : new FormControl(komentar.name,Validators.required),
              'isikomentar' : new FormControl(komentar.isikomentar,Validators.required)
            })
          );
        }
      }
    }
    
    this.isiForm= new FormGroup({
      'name': new FormControl(isiName,Validators.required),
      'imagePath': new FormControl(isiimagePath,Validators.required),
      'description': new FormControl(isiDescription,Validators.required),
      'komentars': isiKomentars
    });
  }

}
