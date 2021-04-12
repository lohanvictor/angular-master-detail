import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryListComponent } from './entry-list/entry-list.component';

const routes: Routes = [
  { path: 'new', component: EntryFormComponent },
  { path: ':id/edit', component: EntryFormComponent },
  { path: '', component: EntryListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntriesRoutingModule { }
