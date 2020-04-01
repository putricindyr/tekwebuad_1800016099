import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './pages/student/student.component';
import { HomeComponent } from './pages/home/home.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { PraktikumComponent } from './pages/praktikum/praktikum.component';


const routes: Routes = [
	{
		path:'student' ,
		component:StudentComponent
	},
	
	{
		path:'home' ,
		component:HomeComponent
	},
	
	{
		path:'teacher' ,
		component:TeacherComponent
	},
	
	{
		path:'praktikum' ,
		component:PraktikumComponent
	}
	
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
