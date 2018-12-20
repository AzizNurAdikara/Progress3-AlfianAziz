import { Komentar } from '../shared/komentar.model';

export class Isi{
    public name:string;
    public description:string;
    public imagePath:string;
    public komentar:Komentar[];
    public komentars:Komentar[];
    constructor(name:string, description:string, imagePath:string, komentar:Komentar[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.komentar = komentar;
        this.komentars = komentar;
    }
}