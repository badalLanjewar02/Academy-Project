import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-primary-wing',
  templateUrl: './primary-wing.component.html',
  styleUrls: ['./primary-wing.component.css']
})
export class PrimaryWingComponent implements OnInit {

primaryWing :FormGroup = new FormGroup({
        id: new FormGroup(0),
        stdName: new FormGroup(''),
        stdMName: new FormGroup(''),
        stdLName:  new FormGroup(''),
        stdAdmisionC: new FormGroup(''),
        stdAdharNo: new FormGroup(''),
        stdAdharDoc: new FormGroup(''),
        stdBirthCer: new FormGroup(''),
        stdPhoto: new FormGroup('')
});

  constructor() { }

  ngOnInit(): void {
  }

}
