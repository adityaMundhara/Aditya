import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ResumeComponentComponent } from './resume-component/resume-component.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', redirectTo: 'aditya', pathMatch: 'full' },
  { path: 'aditya', component: ResumeComponentComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '**', redirectTo: 'aditya' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
