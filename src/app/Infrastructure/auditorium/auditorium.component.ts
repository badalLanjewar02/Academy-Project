import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { PrimaryWingService } from 'src/app/Services/primary-wing.service';
@Component({
  selector: 'app-auditorium',
  templateUrl: './auditorium.component.html',
  styleUrls: ['./auditorium.component.css']
})
export class AuditoriumComponent {

  constructor(private primaryWingService: PrimaryWingService){
    
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

 
    onSave() {
   this.primaryWingService.postData(this.primaryWing.value).subscribe((result)=>{
    console.log(result)
  });
}

}
