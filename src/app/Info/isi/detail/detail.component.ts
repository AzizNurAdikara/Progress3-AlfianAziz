import { Component, OnInit, Input } from '@angular/core';
import { Isi } from '../isi.model';
import { IsiService }from '../isi.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  isi:Isi;
  id:number;
 
  constructor(private isiService:IsiService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.isi=this.isiService.getIsi(this.id);
      }
    )
  }
  onAddKomentar(){
    this.isiService.addKomentarsKomentar(this.isi.komentars);
  }
  onEditIsi(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
  onDeleteIsi(){
    this.isiService.deleteIsi(this.id);
    this.router.navigate(['/isis']);
  }

}
