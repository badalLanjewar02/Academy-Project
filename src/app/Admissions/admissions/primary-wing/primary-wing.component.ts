import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-wing',
  templateUrl: './primary-wing.component.html',
  styleUrls: ['./primary-wing.component.css']
})
export class PrimaryWingComponent implements OnInit {
  studentEntry: StudentEntry = {
    id: 0,
    stdFirstName: '',
    stdMiddleName: '',
    stdLastName: '',
    stdAdmissionClas: '',
    stdAadharNumber: '',
    stdAadharDocument: '',
    stdBirthCertificate: '',
    stdPassportPhoto: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: any) {
  }
}

export interface StudentEntry {
  id: number;
  stdFirstName: string;
  stdMiddleName: string;
  stdLastName: string;
  stdAdmissionClas: string;
  stdAadharNumber: string;
  stdAadharDocument: string;
  stdBirthCertificate: string;
  stdPassportPhoto: string;
}