import{ NgModule} from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';
import {  SejarahKabComponent } from './sejarah/sejarah-kab/sejarah-kab.component';
import {  SejarahKotaComponent } from './sejarah/sejarah-kota/sejarah-kota.component';
import {  DokumentasiKabComponent } from './sejarah/dokumentasi-kab/dokumentasi-kab.component';
import {  DokumentasiKotaComponent } from './sejarah/dokumentasi-kota/dokumentasi-kota.component';
import { InfoComponent } from './Info/Info.component';
import { IsiComponent } from './Info/isi/isi.component';
import { KomentarComponent } from './Info/komentar/komentar.component';
import { EditComponent } from './Info/isi/edit/edit.component';
import { DetailComponent } from './Info/isi/detail/detail.component';
import { StartComponent } from './Info/isi/start/start.component';


const appRoutes:Routes=[
{path:'',redirectTo:'beranda',pathMatch:'full'},
{path:'beranda',component:BerandaComponent},
{path:'sejarah-kab',component: SejarahKabComponent},
{path:'sejarah-kota',component: SejarahKotaComponent},
{path:'dokumentasi-kab',component:  DokumentasiKabComponent},
{path:'dokumentasi-kota',component:  DokumentasiKotaComponent},
{path:'informasi',component:  InfoComponent, children:[
        {path:'',component:  StartComponent},
        {path:'new',component: EditComponent},
        {path:':id',component: DetailComponent},
        {path:':id/edit',component:  EditComponent},
        {path:'komentar',component: KomentarComponent}
    ]},

];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}