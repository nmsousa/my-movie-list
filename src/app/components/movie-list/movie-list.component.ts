import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {Movie} from "../../models/movie.model";
import {MatSort, Sort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {MovieDialog} from "../movie-dialog/movie-dialog";
import mockedMovies from "../../../assets/mock-movies.json";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements OnInit, AfterViewInit {
    @ViewChild(MatTable) table: MatTable<any>;
    @ViewChild(MatSort) sort: MatSort;

    dataSource: MatTableDataSource<any> = new MatTableDataSource<Movie>();
    allColumns: string[] = ['year', 'title', 'posterUrl', 'genres', 'director', 'actors', 'seenStatus', 'plot', 'runtime'];
    displayedColumns: string[] = ['year', 'title', 'genres', 'director', 'actors', 'seenStatus', 'plot', 'runtime'];
    // filterText: string = '';

    constructor(private changeDetectorRef: ChangeDetectorRef, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.dataSource.data = mockedMovies.movies;
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

    onSearchChange(searchText: string) {
        this.dataSource.filter = searchText;
    }

    onAddMovie() {
        const dialogRef = this.dialog.open(MovieDialog); /*, {
            data: {movie: this.},
        });*/

        dialogRef.afterClosed().subscribe(movie => {
            if (movie) {
                movie.id = Math.max(...this.dataSource.data.map(movie => movie.id));
                this.dataSource.data = [...this.dataSource.data, movie];
            }
        });

        // this.dataSource.data.splice(0, 0, newMovie);

        // this.dataSource.data.push(newMovie);
        //this.dataSource.data = [...this.dataSource.data, newMovie];
        this.dataSource.filter = '';
        // this.table.renderRows();
        // this.refreshTableRows();
    }

    // refreshTableRows() {
    //     this.table.dataSource = [...this.dataSource.data];
    // }

    onSortChange($event: Sort) {
        //this.refreshTableRows();
        // this.table.renderRows();
    }

    onShowPostersChange(event: MatCheckboxChange) {
        // If we want to show the Movie Posters
        if (event.checked) {
            this.displayedColumns = [...this.allColumns];
        } else {
            this.displayedColumns = this.allColumns.filter(column => column !== 'posterUrl');
        }
    }
}
