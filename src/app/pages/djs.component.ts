import { Component } from '@angular/core';

import { PageComponent } from './page.component';

@Component({
    templateUrl: './djs.component.html',
    styleUrls: ['./page.component.css']
})

export class DjsComponent extends PageComponent {
    title = 'Dj`s';
    description = '';
    description2 = '';
    djs = [
        {
            name: `Tscherboo`,
            facebook: `https://www.facebook.com/Tscherboo/ `,
            soundcloud: `https://soundcloud.com/tscherbooo `,
            mixcloud: `https://www.mixcloud.com/tscherboo-kevin/ `,
            genre: `Progressive Trance`,
            website: ``,
            description: `So this is Tscherboo... for what exactly is he here??

Ah, he delivers the People on the Floor those pure Headbanging Progressive Sound's !!... Mehr anzeigen
`,
            image: ``
        },
        {
            name: `Dj SAKM`,
            facebook: `https://www.facebook.com/SaKMdO.Ob/ `,
            soundcloud: `https://soundcloud.com/sakm `,
            mixcloud: ``,
            genre: `Dirt Prog/ Progressive Trance/ Psyprog`,
            website: ``,
            description: ``,
            image: ``
        },
        {
            name: `Dj Harlekin`,
            facebook: `https://www.facebook.com/HarlekinIDirty/ `,
            soundcloud: `https://soundcloud.com/harlekinss`,
            mixcloud: ``,
            genre: `Psyprog/ Dirt Prog/ Progressive Trance/ Psytrance`,
            website: ``,
            description: `I am 25 years old and I come from bonn.
Since the beginning of 2015 I am lable dj at 3886 Records and even since a half year ago in iDirty Records, too.
`,
            image: ``
        },
        {
            name: `Dj Malice D`,
            facebook: `https://www.facebook.com/DJMaliceD/ `,
            soundcloud: `https://soundcloud.com/maliced `,
            mixcloud: ``,
            genre: ``,
            website: ``,
            description: ``,
            image: ``
        },
        {
            name: `Dj DoR`,
            facebook: ``,
            soundcloud: ``,
            mixcloud: ``,
            genre: ``,
            website: ``,
            description: ``,
            image: ``
        },
        {
            name: `Dj Buddha`,
            facebook: `https://www.facebook.com/buddhapsr/?fref=ts `,
            soundcloud: `https://soundcloud.com/buddhaprog/ `,
            mixcloud: ``,
            genre: ``,
            website: ``,
            description: ``,
            image: ``
        },
        {
            name: `Djane Katschinka`,
            facebook: `https://www.facebook.com/Katschinka.Harz/ `,
            soundcloud: ``,
            mixcloud: `https://www.mixcloud.com/katschinka/ `,
            genre: ``,
            website: ``,
            description: ``,
            image: ``
        },
        {
            name: `Dj Van Hauser (Grenzwert)`,
            facebook: ``,
            soundcloud: ``,
            mixcloud: ``,
            genre: ``,
            website: ``,
            description: ``,
            image: ``
        },
        {
            name: `Dj Bensynth`,
            facebook: ``,
            soundcloud: ``,
            mixcloud: ``,
            genre: ``,
            website: ``,
            description: ``,
            image: ``
        },
        {
            name: `Dj Furaha`,
            facebook: ``,
            soundcloud: ``,
            mixcloud: ``,
            genre: ``,
            website: ``,
            description: ``,
            image: ``
        },
        {
            name: `Katayami`,
            facebook: ``,
            soundcloud: ``,
            mixcloud: ``,
            genre: ``,
            website: ``,
            description: ``,
            image: ``
        },
        {
            name: `Dj C.U.L.T`,
            facebook: ``,
            soundcloud: ``,
            mixcloud: ``,
            genre: ``,
            website: ``,
            description: ``,
            image: ``
        },
        {
            name: `Der Träumer`,
            facebook: ``,
            soundcloud: ``,
            mixcloud: ``,
            genre: ``,
            website: ``,
            description: ``,
            image: ``
        }
    ]
}
