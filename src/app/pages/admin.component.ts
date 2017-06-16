import { Component } from '@angular/core';

import { PageComponent } from './page.component';
declare var $;
@Component({
    templateUrl: './admin.component.html',
    styleUrls: ['./page.component.css']
})
export class AdminComponent extends PageComponent {
    title = 'Administration';

    panels = [
        { name: 'gallery' },
        { name: 'artists' },
        { name: 'releases' },
        { name: 'calendar' }
    ];

    panel = this.panels[0];

    ngOnInit() {
       
    }
    setPanel(p:any) {
        this.panel = p;
        if (p.name == 'calendar') {
            setTimeout(() => {
                $('#calendar').calendario();
            }, 500);
            
        }
    }
}
