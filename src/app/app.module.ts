import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './footer/footer.component';
import { BerandaComponent } from './beranda/beranda.component';
import { SejarahComponent } from './sejarah/sejarah.component';
import {  SejarahKabComponent } from './sejarah/sejarah-kab/sejarah-kab.component';
import {  DokumentasiKabComponent } from './sejarah/dokumentasi-kab/dokumentasi-kab.component';
import {  DokumentasiKotaComponent } from './sejarah/dokumentasi-kota/dokumentasi-kota.component';
import {  SejarahKotaComponent } from './sejarah/sejarah-kota/sejarah-kota.component';
import { InfoComponent } from './Info/Info.component';
import { IsiComponent } from './Info/isi/isi.component';
import { IsiService } from './Info/isi/isi.service';
import { ListComponent } from './Info/isi/list/list.component';
import { ItemComponent } from './Info/isi/list/item/item.component';
import { EditComponent } from './Info/isi/edit/edit.component';
import { DetailComponent } from './Info/isi/detail/detail.component';
import { KomentarComponent } from './Info/komentar/komentar.component';
import { KomentarEditComponent } from './Info/komentar/komentar-edit/komentar-edit.component';
import { KomentarService } from './Info/komentar/komentar.service';
import { StartComponent } from './Info/isi/start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BerandaComponent,
    SejarahComponent,
    SejarahKabComponent,
    SejarahKotaComponent,
    DokumentasiKabComponent,
    DokumentasiKotaComponent,
    InfoComponent,
    IsiComponent,
    StartComponent,
    ListComponent,
    ItemComponent,
    EditComponent,
    DetailComponent,
    KomentarComponent,
    KomentarEditComponent
],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [KomentarService,IsiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
