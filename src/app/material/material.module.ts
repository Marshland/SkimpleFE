import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatGridListModule,
  MatMenuModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule
  ]
})
export class MaterialModule {}
