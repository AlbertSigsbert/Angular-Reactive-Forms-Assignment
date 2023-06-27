import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms-assignment';
  projectForm: FormGroup;
  forbiddenNames = ['Test']

  
  constructor() {
    this.projectForm = new FormGroup({});
  }

   ngOnInit(): void {
     this.projectForm = new FormGroup({
       'projectName': new FormControl(null, [Validators.required,this.forbiddenNameValidator.bind(this)]),
      // 'projectName': new FormControl(null, {validators: [Validators.required], asyncValidators:this.forbiddenNameValidator}),
       'mail':new FormControl(null, [Validators.required, Validators.email]),
       'projectStatus': new FormControl(null, Validators.required)
     });
   }

   //Custom Validator
   forbiddenNameValidator(control:FormControl):{[s:string]: boolean} | null {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
       return { 'nameIsForbidden': true}
    }
    return null
   }

   //Async Validator
  //  forbiddenNameValidator(control:FormControl): Promise<any> | Observable <any>{
  //    const promise = new Promise<any>((resolve,reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'Test') {
  //          resolve({'nameIsForbidden': true})
  //       }else{
  //         resolve(null)
  //       }
  //     }, 1000);
  //    });

  //    return promise;
  //  }

   
   onSubmit(){
    console.log(this.projectForm.value);
    
   }
}
