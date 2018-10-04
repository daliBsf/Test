import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ReglesComponent } from "./pages/regles/regles.component";




export const ROUTES: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [{
            path: 'register',
            component: RegisterComponent
        }, {
            path: 'regles',
            component: ReglesComponent
        },
        { path: '', redirectTo: 'register', pathMatch: 'full' }



        ]
    },
]



