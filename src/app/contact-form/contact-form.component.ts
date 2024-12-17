import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  onSubmit(form: any){
    console.log(`Form Submitted:${form}`);
  }
}








// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';


// @Component({
//   selector: 'app-contact-form',
//   templateUrl: './contact-form.component.html',
//   styleUrls: ['./contact-form.component.css']
// })
// export class ContactFormComponent implements OnInit {
//   // contactForm!: FormGroup;

//   // constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     // this.contactForm = this.fb.group({
//     //   name: ['', Validators.required],
//     //   email: ['', [Validators.required, Validators.email]],
//     //   message: ['', Validators.required]
//     // });
//   }

//   onSubmit(): void {
//     if (this.contactForm.valid) {
//       // Handle form submission
//       console.log(this.contactForm.value);
//     }
//   }
// }

