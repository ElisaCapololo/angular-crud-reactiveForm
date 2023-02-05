import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../services/toastr.service';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {

  showToast = false;
  toastrMsg = "";
  toastrType = "";
  toastrPosition = "";

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.toastr.status.subscribe((msg: string) =>{
      this.toastrType = localStorage.getItem("toastrType") || "";
      this.toastrPosition = localStorage.getItem("toastrPosition") || "";
      if(msg === null){
        this.showToast = false;
      } else{
        this.showToast = true;
        this.toastrMsg = msg;
      }
    })
   
  }

  closeToast(){
    this.showToast = false;
  }

}
