import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MiddleWingServiceService } from 'src/app/Services/middle-wing-service.service';

@Component({
  selector: 'app-admissionsenior-wing',
  templateUrl: './admissionsenior-wing.component.html',
  styleUrls: ['./admissionsenior-wing.component.css']
})
export class AdmissionseniorWingComponent implements OnInit {
middleWingForm!: FormGroup;

  constructor(private middleWingService: MiddleWingServiceService) {}

   ngOnInit(): void {

    this.middleWingForm = new FormGroup({
      sName: new FormControl('')
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
