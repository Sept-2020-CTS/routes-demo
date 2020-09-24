import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path : '', component:HomeComponent},  
  {path : 'servers', component : ServersComponent},
  {path : 'servers/server/:id/:name', component : ServerComponent},
  {path : 'users', component : UsersComponent, children:[
    {path : ':name', component : UserComponent}
  ]},
  {path : '**', component:ErrorComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
