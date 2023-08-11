import {Injectable} from "@angular/core";

@Injectable()
export class ImageHelper {
    constructor(){}

    verifyFavs() {
        const favs = localStorage.getItem('favs');
        if (!favs) {
            localStorage.setItem('favs', JSON.stringify([]))
        }

        return favs;
    }
}