import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './auth.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ReglesComponent } from './pages/regles/regles.component';
import { ConditionComponent } from './components/condition/condition.component';
import { ScrollTrackerDirective } from './directives/scroll-tracker.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,


  ],
  declarations: [AuthComponent, RegisterComponent, ReglesComponent,ConditionComponent,ScrollTrackerDirective]
})
export class AuthModule { 



  static forRoot():ModuleWithProviders{ 
    return { 
      ngModule:AuthModule, 
      providers:[
        AuthService

      ]
    }
  }
}
