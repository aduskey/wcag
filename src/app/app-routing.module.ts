import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { CaseSettingsComponent } from './views/case-settings/case-settings.component';
import { CreateNewComponent } from './views/create-new/create-new.component';
import { HomeComponent } from './views/home/home.component';
import { SubnavComponent } from './views/subnav/subnav.component';
import { VisualSearchComponent } from './views/visual-search/visual-search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'subnav',
    component: SubnavComponent,
    children: [
      { path: 'details', component: DetailsComponent },
      { path: 'edit', component: EditComponent },
    ],
  },
  { path: 'case-settings', component: CaseSettingsComponent },
  { path: 'create-new', component: CreateNewComponent },
  { path: 'visual-search', component: VisualSearchComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
