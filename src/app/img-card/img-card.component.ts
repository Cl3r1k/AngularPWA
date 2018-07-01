import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-img-card',
    templateUrl: './img-card.component.html',
    styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

    public button: Button = {
        text: 'Give me another cat',
        disabled: false
    };

    private image: CatImage = {
        message: 'Progressive Web App',
        api: 'https://cataas.com/cat/says/',
        fontSize: 40
    };

    public src: string;

    constructor() { }

    ngOnInit() {
        this.generateSrc();

        if (!navigator.onLine) {
            this.button.text = 'Sorry, you\'re offline';
            this.button.disabled = true;
        }
    }

    generateSrc() {
        this.src = this.image.api + this.image.message + '?size=' + this.image.fontSize + '&ts=' + Date.now();
    }

}

class CatImage {
    message: string;
    api: string;
    fontSize: number;
}

class Button {
    text: string;
    disabled: boolean;
}
