import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ArtSubmission } from '../../model/art-submission-model';

@Component({
  selector: 'app-art-form',
  templateUrl: './art-form.component.html',
  styleUrls: ['./art-form.component.scss']
})
export class ArtFormComponent {
  model = new ArtSubmission();
  submitted = false;
  onSubmit() {
     this.submitted = true;
  }
}
