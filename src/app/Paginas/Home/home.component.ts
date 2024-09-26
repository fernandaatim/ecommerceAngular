import { Component, inject } from '@angular/core';
// import { LoginService } from '../../Service/Login/login.service';
// import { LoginResponse } from '../../Interfaces/login-response';
 
@Component({
  selector: 'app-home',
  standalone: true,
  // imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}

// _fb = inject(FormBuilder)
// loginService = inject(LoginService);
// resposta: LoginResponse | undefined

// form = this._fb.group({
//   username: ["", Validators.required],
//   password: ["", Validators.required],
// })

// logar(){
//   this.loginService
//   .logar(
//     this.form.controls.username.value!,
//     this.form.controls.password.value!
//   ).subscribe({
//     next: (val: LoginResponse) => {
//       this.resposta = val
//     }
//   })
// }