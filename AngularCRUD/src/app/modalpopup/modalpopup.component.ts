import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsermasterService } from '../service/usermaster.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent  implements OnInit{
  roleData:any;
  editData:any;
  editresult:any;
  constructor(private service:UsermasterService, @Inject(MAT_DIALOG_DATA) public data:any,
  private ref:MatDialogRef<ModalpopupComponent>) {}

   ngOnInit(): void {
     this.GetAllRoles();
     this.GetExistData(this.data.userid);
   }
  
   updateForm= new FormGroup({
     userid:new FormControl({value:"",disabled:true}),
     role: new FormControl("", Validators.required),
     isActive: new FormControl(true)
  })

   Updateuser(){
    if(this.updateForm.valid){
      console.log(this.updateForm.getRawValue())
      this.service.UpdateUser(this.updateForm.getRawValue()).subscribe(item=>{
        this.editresult = item;
        if(this.editresult.result == 'pass'){
          alertify.success("Updated successfuly.")
          this.ref.close()
        }else{
          alertify.error("Failed try again.")
        }
      })
    }
  }

  GetAllRoles(){
    this.roleData = this.service.GetAllRoles();
  };
  
  GetExistData(userid:any){
    this.service.GetUserById(userid).subscribe(item =>{
      this.editData = item;
      console.log(this.editData)
      if(this.editData != null){
        this.updateForm.setValue({userid: this.editData.userid,role:this.editData.role, isActive: this.editData.isActive})
      }
    });
  }
}
