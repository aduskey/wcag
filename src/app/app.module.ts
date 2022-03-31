import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsHeaderComponent } from './components/details-header/details-header.component';
import { DetailsComponent } from './components/details/details.component';
import { EditBarComponent } from './components/edit-bar/edit-bar.component';
import { EditComponent } from './components/edit/edit.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SimpleSearchComponent } from './components/simple-search/simple-search.component';
import { SingleSelectComponent } from './components/single-select/single-select.component';
import { SubnavListComponent } from './components/subnav-list/subnav-list.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MaterialModule } from './material.module';
import { CaseSettingsComponent } from './views/case-settings/case-settings.component';
import { CreateNewComponent } from './views/create-new/create-new.component';
import { SubnavComponent } from './views/subnav/subnav.component';
import { VisualSearchComponent } from './views/visual-search/visual-search.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SubnavComponent,
    CreateNewComponent,
    VisualSearchComponent,
    CaseSettingsComponent,
    TopNavComponent,
    SubnavListComponent,
    DetailsHeaderComponent,
    TabContentComponent,
    IconNavComponent,
    MultiSelectComponent,
    SingleSelectComponent,
    PaginationComponent,
    MainNavComponent,
    DetailsComponent,
    EditComponent,
    EditBarComponent,
    SimpleSearchComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
