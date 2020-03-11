import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reposViewComponents, RepoDetailsDialogComponent } from '.';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [...reposViewComponents, ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  exports: [...reposViewComponents],
  entryComponents: [ RepoDetailsDialogComponent ]
})
export class RepoListViewModule { }
