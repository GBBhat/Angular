import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    exports:[MatCardModule,
        MatInputModule,
        MatTableModule,
        MatFormFieldModule,
        MatButtonModule,
        MatPaginatorModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule]
})
export class materialmodule{

}