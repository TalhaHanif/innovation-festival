import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RecentpostsComponent } from './recentposts/recentposts.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    SearchComponent,
    RecentpostsComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SidebarModule { }
