import {NgModule} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
    exports: [
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatSortModule,
        MatAutocompleteModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatRadioModule,
    ]
})
export class MaterialModule {
}
