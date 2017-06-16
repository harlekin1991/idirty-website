import { Component } from '@angular/core';

import { PageComponent } from './page.component';

export class HomeComponent extends PageComponent {
    title = 'Home';
    backgroundAnimationClass = 'start';

    uDirtyString = '';

    uDirtyAni = [
        'a',
        'r',
        'e',
        ' y',
        'o',
        'u',
        ' d',
        'i',
        'r',
        't',
        'y',
        ' ?',
        '!',
    ];

    uDirtyAniRate = 250;

    startUDirtyAni() {
        for (let i = 0; i < this.uDirtyAni.length; i++) {
            setTimeout(() => {
                this.uDirtyString += this.uDirtyAni[i];
                if (i == this.uDirtyAni.length - 1) {
                    setTimeout(() => {
                        this.startBackgroundAnimation();
                        this.uDirtyString = '';
                    }, 1000);
                }
            }, (i + 1) * this.uDirtyAniRate);
        }
    }

 
    ngOnInit() {
        this.startUDirtyAni();
 

    }
}
