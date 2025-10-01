import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PrimaryWingService } from 'src/app/Services/primary-wing.service';

@Component({
  selector: 'app-admissionprimary-wing',
  templateUrl: './admissionprimary-wing.component.html',
  styleUrls: ['./admissionprimary-wing.component.css']
})
export class AdmissionprimaryWingComponent implements OnInit {

  constructor(private primaryWingService: PrimaryWingService) {

  }
  primaryWing: FormGroup = new FormGroup({
    id: new FormControl(0),
    stdName: new FormControl(''),
    stdMName: new FormControl(''),
    stdLName: new FormControl(''),
    stdAdmisionC: new FormControl(''),
    stdAdharNo: new FormControl(''),
    stdAdharDoc: new FormControl(null),
    stdBirthCer: new FormControl(null),
    stdPhoto: new FormControl(null)
  });
  ngOnInit(): void {
  }
  onSave() {
    this.primaryWingService.postData(this.primaryWing.value).subscribe((result) => {
      console.log(result)
    });
  }

}
