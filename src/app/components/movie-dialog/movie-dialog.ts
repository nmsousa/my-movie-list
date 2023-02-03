import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Movie} from "../../models/movie.model";
import {SeenStatus} from "../../enums/seen-status.enum";

@Component({
    selector: 'app-movie-dialog',
    templateUrl: './movie-dialog.html',
    styleUrls: ['./movie-dialog.scss']
})
export class MovieDialog implements OnInit {
    movie: Movie;

    constructor(public dialogRef: MatDialogRef<MovieDialog>) {
                // @Inject(MAT_DIALOG_DATA) public data: Movie) {
    }

    ngOnInit(): void {
        this.movie = {
            id: -1,
            title: '',
            year: new Date().getFullYear(),
            seenStatus: SeenStatus.HOME
        } as Movie;
    }

    onCancelClick() {
        this.dialogRef.close(this.movie);
    }
}
