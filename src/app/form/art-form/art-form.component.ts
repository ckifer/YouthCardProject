import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArtSubmission } from '../../model/art-submission-model';

@Component({
  selector: 'app-art-form',
  templateUrl: './art-form.component.html',
  styleUrls: ['./art-form.component.scss']
})
export class ArtFormComponent {
  model = new ArtSubmission();
  submitted = false;
  form = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')]),
    congregation: new FormControl(),
    file1: new FormControl('', Validators.required),
    file2: new FormControl(),
    file3: new FormControl(),
    file4: new FormControl()
  });

  get firstname() {
    return this.form.get('firstname');
  }

  get lastname() {
    return this.form.get('lastname');
  }

  get email() {
    return this.form.get('email');
  }

  get file1() {
    return this.form.get('file1');
  }


  onSubmit() {
     this.submitted = true;
  }
}
