import { Component, OnInit } from '@angular/core';
import { NewCustomerComponent } from 'app/new-customer/new-customer.component';
import { FullDataEmpComponent } from 'app/full-data-emp/full-data-emp.component';
import {MatDialog} from '@angular/material/dialog';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],
  
})


export class TypographyComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }
  
  openDialog(){
    this.matDialog.open(NewCustomerComponent,{
      width:'650px',
    })
  }
  openDialogViewEmp(){
    this.matDialog.open(FullDataEmpComponent,{
      width:'650px',
    })
  }
  confirmBox(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  

}
