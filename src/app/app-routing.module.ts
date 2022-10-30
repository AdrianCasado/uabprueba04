import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'heroes', component:HeroesComponent},
{path:'heroe/:id', component:HeroeComponent},
{path:'home', component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'**', component:HeroesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
