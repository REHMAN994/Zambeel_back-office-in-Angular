import { Component,  OnInit} from '@angular/core';

import { FullDataCustomerComponent } from 'app/full-data-customer/full-data-customer.component';
import {MatDialog} from '@angular/material/dialog';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})

export class TableListComponent implements OnInit  {
  
  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }
  // openDialog(){
  //   this.matDialog.open(NewCustomerComponent,{
  //     width:'350px',
  //   })
  // }

  openDialogViewCus(){
    this.matDialog.open(FullDataCustomerComponent,{
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




