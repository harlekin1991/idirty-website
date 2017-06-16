import { Component } from '@angular/core';

@Component({
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
    title = '';
    description = 'allgemeine description';

    backgroundAnimationClass = 'loaded';

 

    startBackgroundAnimation() {
        setTimeout(() => {
            this.backgroundAnimationClass = 'loading';
            setTimeout(() => {
                this.backgroundAnimationClass = 'ended';
            }, 2000);
        }, 500);
    };

}
