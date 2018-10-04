import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private router:Router
  ) {}

  ngOnInit() {


   
    
    
    this.userForm = this.formBuilder.group({
      email: ["",Validators.compose([Validators.required,Validators.email])],
      password: ["", Validators.required],
      


    });
  }
 
  addUser(data) {
    this.authService.login().subscribe(res=>{ 
      if(res)
        this.router.navigate(['auth/regles']);
        
    });
    
    
  }
 

}
