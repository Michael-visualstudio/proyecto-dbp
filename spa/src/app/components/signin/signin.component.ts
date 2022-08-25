import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  user = {
    username:'',
    password:''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn(){
    this.authService.signIn(this.user).subscribe(
      (res:any) =>{
        sessionStorage.setItem('token',res.token)
        this.router.navigate(['/countries'])
      },
      err=>console.log(err))
  }
}
