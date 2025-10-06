import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MiddleWingServiceService } from 'src/app/Services/middle-wing-service.service';

@Component({
  selector: 'app-admissionmiddle-wing',
  templateUrl: './admissionmiddle-wing.component.html',
  styleUrls: ['./admissionmiddle-wing.component.css']
})
export class AdmissionmiddleWingComponent implements OnInit {
  middleWingForm!: FormGroup;

  constructor(private middleWingService: MiddleWingServiceService) { }

  ngOnInit(): void {

    this.middleWingForm = new FormGroup({
      sName: new FormControl(''),
      mName: new FormControl(''),
      lName: new FormControl(''),
      adharNO: new FormControl(''),

      fsName: new FormControl(''),
      fmName: new FormControl(''),
      flName: new FormControl(''),

      msName: new FormControl(''),
      mmName: new FormControl(''),
      mlName: new FormControl(''),
      abcId: new FormControl(''),
      abcContactNo: new FormControl(''),
      admissionClass: new FormControl(''),

    });
  }

  onSubmit(): void {
    const formData = this.middleWingForm.value; // { sName: "Badal" }

    console.log('Sending data:', formData);

    this.middleWingService.addMiddleWing(formData).subscribe({
      next: (res) => {
        console.log('Saved successfully:', res);
        alert('Data saved successfully!');
        this.middleWingForm.reset();
      },
      error: (err) => {
        console.error('Error saving data:', err);
        alert('Failed to save data.');
      }
    });
  }



}
