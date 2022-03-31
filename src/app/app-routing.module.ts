import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { CaseSettingsComponent } from './views/case-settings/case-settings.component';
import { CreateNewComponent } from './views/create-new/create-new.component';
import { SubnavComponent } from './views/subnav/subnav.component';
import { VisualSearchComponent } from './views/visual-search/visual-search.component';

const routes: Routes = [
  {
    path: 'subnav',
    component: SubnavComponent,
    children: [{ path: ':itemId', component: DetailsComponent }],
  },
  { path: 'case-settings', component: CaseSettingsComponent },
  { path: 'create-new', component: CreateNewComponent },
  { path: 'visual-search', component: VisualSearchComponent },
  { path: '', redirectTo: '/subnav/1', pathMatch: 'full' },
  { path: '**', component: VisualSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
