import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
 					   {path:'',component:LoginComponent},
                       {path:'welcome',component:WelcomeComponent},
					   {path:'header',component:HeaderComponent},
					   {path:'footer',component:FooterComponent},
					   {path:'logout',component:LogoutComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
