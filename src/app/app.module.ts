
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from "./pages/home.component";
import { GalleryComponent } from "./pages/gallery.component";
import { ShopComponent } from "./pages/shop.component";
import { ArtistsComponent } from "./pages/artists.component";
import { CalendarComponent } from "./pages/calendar.component";
import { ReleasesComponent } from "./pages/releases.component";
import { LiveactsComponent } from "./pages/liveacts.component";
import { DjsComponent } from "./pages/djs.component";
import { AdminComponent } from "./pages/admin.component";


import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'gallery', component: GalleryComponent },
    {
        path: 'artists', component: ArtistsComponent, children: [
            { path: '', redirectTo: 'liveacts', pathMatch: 'full' },
            { path: 'liveacts', component: LiveactsComponent },
            { path: 'djs', component: DjsComponent }]
    },
    { path: 'calendar', component: CalendarComponent },
    { path: 'releases', component: ReleasesComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'login', component: AdminComponent}
];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    declarations: [
        AppComponent,
        HomeComponent,
        GalleryComponent,
        ShopComponent,
        ArtistsComponent,
        CalendarComponent,
        ReleasesComponent,
        LiveactsComponent,
        DjsComponent,
        AdminComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
