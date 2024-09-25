import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";

export const AUTH_ROUTES: Routes =[
{   
    path: 'auth', component: AuthLayoutComponent, children: [
        {path: 'login', component: LoginComponent },
        {path: 'register', component: RegisterComponent},
    ] 
},
]