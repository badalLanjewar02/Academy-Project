import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-middle-wing',
  templateUrl: './middle-wing.component.html',
  styleUrls: ['./middle-wing.component.css']
})
export class MiddleWingComponent implements OnInit {

  constructor() { }
  primaryWing: FormGroup = new FormGroup({
    id: new FormGroup(0),
    stdName: new FormGroup(''),
    stdMName: new FormGroup(''),
    stdLName: new FormGroup(''),
    stdAdmisionC: new FormGroup(''),
    stdAdharNo: new FormGroup(''),
    stdAdharDoc: new FormGroup(''),
    stdBirthCer: new FormGroup(''),
    stdPhoto: new FormGroup('')
  });
   Lucky = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  }); 

  ngOnInit(): void {
  }

}
