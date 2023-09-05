import { Component, OnInit, ViewChild } from '@angular/core';
import { UsermasterService } from '../service/usermaster.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import * as alertify from 'alertifyjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalpopupComponent } from '../modalpopup/modalpopup.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  userDetails: any;
  dataSource: any;
  roleData: any;
  editData: any;
  constructor(private service: UsermasterService, private dialog:MatDialog) { }
  ngOnInit(): void {
    this.GetAllUsers();
    
  }

  @ViewChild(MatPaginator) paginator !: MatPaginator

  GetAllUsers() {
    this.service.GetAllUsers().subscribe(item => {
      this.userDetails = item;
      console.log(this.userDetails);
      this.dataSource = new MatTableDataSource(this.userDetails);
      this.dataSource.paginator = this.paginator;
     
    });
  }

  UpdateUser(id:string){
    let popup = this.dialog.open(ModalpopupComponent,{
      //width:'400px',
      //height:'400px',
      exitAnimationDuration:'1000ms',
      enterAnimationDuration:'1000ms',
      data:{
        userid:id
      }
    })
    popup.afterClosed().subscribe(item =>{
      this.GetAllUsers();
    })
  }

  RemoveUser(id:string){
    alertify.confirm("Remove User","Do you want to remove this user?",()=>{
      this.service.RemoveUser(id).subscribe(item =>{
        this.GetAllUsers();
        alertify.success("removed successfully");
      })
    },function(){})   
  }

  displayedColumns: string[] = ['userid', 'name', 'email', 'isActive','role','Action'];
}
