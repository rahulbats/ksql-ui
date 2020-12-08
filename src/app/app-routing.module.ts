import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStreamFromTopicComponent } from './create-stream-from-topic/create-stream-from-topic.component';
import { CreateStreamFromStreamComponent } from './create-stream-from-stream/create-stream-from-stream.component';

const routes: Routes = [
  { path: 'create-stream-from-topic', component: CreateStreamFromTopicComponent },
  { path: 'create-stream-from-stream', component: CreateStreamFromStreamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
