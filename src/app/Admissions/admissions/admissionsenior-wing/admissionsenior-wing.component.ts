import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { error } from 'console';
import { MiddleWingServiceService } from 'src/app/Services/middle-wing-service.service';

@Component({
  selector: 'app-admissionsenior-wing',
  templateUrl: './admissionsenior-wing.component.html',
  styleUrls: ['./admissionsenior-wing.component.css']
})
export class AdmissionseniorWingComponent implements OnInit {

  selectedFile: File | null = null;
  formValues: any = {};
  constructor(private service: MiddleWingServiceService) { }

  seniorWingForm = new FormGroup({

    id: new FormControl(''),
    ssName: new FormControl(''),
    ssMName: new FormControl(''),
    ssLName: new FormControl(''),
    ssAdharno: new FormControl(''),
    stdAdharDoc: new FormControl(''),
  })

  ngOnInit(): void {

  }

 onFileChange(event: any) { }
 
 onSubmit() {
  this.service.addSeniorWingData(this.seniorWingForm.value).subscri be(
    (res) => {
      alert('Data Saved Successfully');
      this.seniorWingForm.reset();
    },
    (error) => {
      alert('Error while saving the data');
    }
  );
  
}




}

