import { Component } from '@angular/core';

import { PageComponent } from './page.component';

@Component({
    templateUrl: './liveacts.component.html',
    styleUrls: ['./page.component.css']
})

export class LiveactsComponent extends PageComponent {
    title = 'Live Acts';
    description = '';
    description2 = '';
    liveacts = [
        {
            name: `Necmi`,
            facebook: `https://www.facebook.com/NecmiEss`,
            soundcloud: `https://soundcloud.com/necmi`,
            mixcloud: ``,
            genre: `Progressive/Dirt Prog`,
            website: ``,
            description: `Dirty Prog In town ... in 2010 while chatting with his labelhead Logic Spin, Necmi asked him how to get his sounds more clean. Logic Spin's respond was „Ey diggi, your sound is dirty and cool, thats what it makes it unique and is working like hell on the floor, so why u wanna change it ? ..follow your way, bro“ and a new genre was born ... Necmi had been testing, playing, fiddling and experimenting with music from a very young age, first beginning this experimentation with a tape and record player creating short samples in the early 80's, after he had been Playing the guitar for several years. In 1992 the electronic movement grabbed him and he started with his first live gig in 1994 called Nashcore on techno raves. Also in the year 1994 he participated in his first psychedelic trance party and was totally taken by this new way of music and by the way to celebrate to trance dance, and tried to get his sound more psychedelic. Afterwards for some years him and his friend Uwe were working on the music project „mystique elements“ together. It was in 1999 that his solo project " Necmi " really began to gain some attention as the most straight kicking live-project in the Rhine-scene. His unique definition of trance is built upon pumping tech house beats and collages of atmospheric samples, reflecting all dance styles that crossed his ears throughout the last 20 years. In 2001 after his first releases on Tatsu rec and his debut album „ sensomotorik“ Necmi gained international Attention and started to play in different countries, clubs and festivals. In 2004 he studied Audio Engineering at the SAE to develop his production skills further. In 2009 necmi started a Project called Nitro & Glycerine with his true love Alice Pi. He balanced his life in these years with his three passions as a musician, an audio engineer and street worker. In 2012 Necmi joined the label PSR Music as labelhead and their A&R Manager. Since then Necmi and Logic Spin are leading PSR musicians with lots of Love and dirty Sounds.`,
            image: ``
        },
        {
            name: `Nitro & Glycerin`,
            facebook: `https://www.facebook.com/nitroandglycerine/`,
            soundcloud: `https://soundcloud.com/nitro-4`,
            mixcloud: ``,
            genre: `Dirt Prog/ Dirt Psy/ Progressive`,
            website: ``,
            description: `Nitro & Glycerine is the duo-project of Necmi and Sylvia (Alice Pi), in which they celebrate their love and friendschip for each other and express this in their music. Their sound is the result of an innovative symbiosis of Necmi’s dynamic dirty prog and Alice Pi’s funny psychedelic inputs. This unique style is significant for its fresh vocals, strong baselines and frisky background expanses. While she participated in an internship for her Social Work Studies, Sylvia got a job in an institution located in a deprived area, where Necmi was working as a Street Worker. They got to know each other while he trained and guided her in this special working field. In 2009, she finally found a partner who shared her same desires in passion and music; Necmi, who showed her the workings of Cubase. As she had been playing the piano for many years contributing her a good grasp in music knowledge and a good ear for tunes and beat, she was a quick learner so that after a couple of weeks she produced her first tracks under the Name of “Alice Pi”. Necmi was surprised and happy about these results, so that the dream he had been dreaming for many years could become true- having a partner for multiple things at the same time: life, love and music. Together it was inevitable serious sparks would fly. Shortly after producing their first tracks together, they joined the independent music label PSR Music and released their first album. After travelling and live acting all around Northern Europe for 3 years, their Music came like a bombshell especially in Austria and Switzerland and influenced the trance scene there. Their explosive energy that people can feel and experience at live sets represents their two personalities and the dynamics of their relationship - so that Nitro und Glycerine live up to their names.`,
            image: ``
        },
        {
            name: `Gaiazentrix`,
            facebook: `https://www.facebook.com/GaiaiDirtyRec/?ref=br_rs `,
            soundcloud: `https://soundcloud.com/gaiazentrix `,
            mixcloud: ``,
            genre: `Progressive/ Psy/ Trance`,
            website: ``,
            description: ``,
            image: ``
        },
        {
            name: `Jawgrinder`,
            facebook: `https://www.facebook.com/Jawgrinder/?ref=br_rs `,
            soundcloud: `https://soundcloud.com/jawgrinder `,
            mixcloud: ``,
            genre: `Dirt Prog`,
            website: ``,
            description: `Jawgrinder aka Yannick Staub is a 20 year old Progressive Psytrance Producer based in Zurich. In the Summer of 2013 he starts to create his own music.`,
            image: ``
        },
        {
            name: `Si-moon`,
            facebook: `https://www.facebook.com/simoonmusic/ `,
            soundcloud: `https://soundcloud.com/si-moon-official `,
            mixcloud: ``,
            genre: `Trance/ Progressive Trance/ Dirt Prog`,
            website: ``,
            description: `Simon Schneider alias Si-Moon was born on the 15.07.1992 in Swiss. At his first psytrance party in 2008 as he recognized that the powerfull bass wich controled his heartbeat and give him the full boody goose pumps he get addicted to the bass
Since this moment he know what was to do: He need to become a DJ, becouse as a DJ you can control hundert of peoples with your heartbeat and drag them into your powerfull spell of you own crazy fantasies. The People can come with you through your own wonderful fantasy world, where time and matter is no issue, where just you and the music is, to the maximum escalation of your body and mind. One year ago si -moon played his first live act . After this he became quite popular in Swiss and he was booked out every weekend several times. And the curve does not weaken, it rises steeply. 
He surprised the visitors all the time with new and powerful basslines, and blast them away with the power of his music. When Si-Moon plays at a party, no one will stand around, all are dancing in the spell of his music.

see ya on the dancefloor party people :D

Feel free to contact me :)`,
            image: ``
        },
        {
            name: `Kleysky`,
            facebook: `https://www.facebook.com/KleySky.music/ `,
            soundcloud: `https://soundcloud.com/kleysky_music `,
            mixcloud: ``,
            genre: `Dirty Psy Prog`,
            website: ``,
            description: `Born and raised in Berlin Germany, Matthias Kley alias "Kleysky" (29) got influenced by Progressive Trance at the end of 2013.
He started mixing Prog Trance followed by Psychedelic Trance and even Full On.

February 2014 he decided to move to Hamburg, and from that point on, he was hooked with the harder styles of Prog and Psy Trance. He soon started playing tracks by acts, such as: Necmi, Elfo, Nitro & Glycerine, Meis, Gonzi and Si-Moon.
After some time has passed, Matthias managed to create his own unique sound.
A sound, some people also refer to as the "Kleysky Sound". 
His sound was not just harder as the usual Progressive Offbeat sound from Hamburg, but also much more faster with her storytelling.
It was "Dirty-Psyprog"!

With the help of an friend and producer from Danemark, Matthias brought life into his project. Since october 2015 he produces his own tracks, with passion, but mostly love for the music.

He already played at big festivals such as: "Natürlich Irre", "Zurück zu den Wurzeln", "Holographic Universe", "Shining", "Orange Sun" , "Dedication", "Bachblyten", "Summer Dream", "Synaptic Eclipse", "Transylvania Calling", "Psychedelic Circus", "Indian Spirit" and even "Airbeat One".
With some of the scene leading acts such as: Neelix, Astrix, Ace Ventura, Vini Vici, Bubble, Upgrade, Undercover, Skazi, Blastoyz, X-NoiZe, LOUD, Omiki and many more...

Those are just a few of the many reasons, why Matthias, has made such a big name out of himself in such little time. Kleysky joined in september 2016 "iDirty Records".
In November 2016 his debut EP "Crazy Show" tooked over the Beatport Psytrance Charts, by entering on rank 10.
Kleysky is ready to make 2017 to his Year, taking you through the Galaxy without looking back...

RELEASES:
2016-08-22 / Summer Dreams (Single)
goo.gl/OFSVZ5

2016-11-14 / Crazy Show (EP)
goo.gl/nsdwgS

2016-12-30 / Winter Groovez, VOL. 3 (Compilation)
goo.gl/n06U5H

2017-01-16 / Back to the Future (EP)
goo.gl/xWcTyc

2017-01-30 / Sun Department, Vol. 4 (Compilation)
goo.gl/TbaaNN`,
            image: ``
        },
        {
            name: `Dual Chaos`,
            facebook: `https://www.facebook.com/dualchaoslive/ `,
            soundcloud: `https://soundcloud.com/dualchaos `,
            mixcloud: ``,
            genre: `Progressive Trance`,
            website: ``,
            description: `Dual Chaos - Biography  Pumping, hip swinging, off beat orientated baselines such as crisp & clear psychedelic sounds and groovy hypnotic melodies are some of the fine characteristics of producer duo Kevin Nickel & Janis Klepers aka Dual Chaos from Cologne, Germany. Both got infected by the pumping sound of Progressive Trance in the early days of the Millenium. Together they trained their skills of producing really quick, always focused on taking their sound to a higher level. Their first release has been issued by the German Progressive Trance record label: PSR Music. Currently they are working on their next solo EP plus several blasting collaborations and reworks for other acclaimed producers worldwide. Stay tuned for our upcoming releases
For Bookings, please contact us here --> www.facebook.com/dualchaoslive`,
            image: ``
        },
        {
            name: `Parra Nebula`,
            facebook: `https://www.facebook.com/ParraNebula/ `,
            soundcloud: `https://soundcloud.com/parranebula `,
            mixcloud: ``,
            genre: `Dirt Prog/ Psy Prog`,
            website: ``,
            description: `Parra Nebula is a brand new Dirty Prog (2.0) project that was brought to life in the middle of 2016 by Djapatox (19) & DNNS (19).

iDirty Records ©`,
            image: ``
        },
        {
            name: `Binary Function`,
            facebook: `https://www.facebook.com/binary.function.music/ `,
            soundcloud: `https://soundcloud.com/binary-function-live `,
            mixcloud: ``,
            genre: `Dirty Psy Prog`,
            website: ``,
            description: `The side project of Chrizzlix & Kleysky from Hamburg!

In 2016 Chrizzlix and Kleysky joined forces to combine their already special trance styles to an unique soundexperience which delivers funny, crazy and euphoric moments carried by heavy basslines with sonic diversity.`,
            image: ``
        }

    ];

}
