import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";
import {MovieDialog} from "./components/movie-dialog/movie-dialog";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
    declarations: [
        AppComponent,
        MovieListComponent,
        MovieDialog
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
