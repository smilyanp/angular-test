import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageViewComponent } from './image-view/image-view.component';
const routes: Routes = [
  { path: '**', component: ImageGalleryComponent },
  { path: 'image', component: ImageViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
