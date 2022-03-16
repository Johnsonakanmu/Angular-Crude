import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from '../shared/employee dash model';


@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrls: ['./employee-dash.component.scss']
})
export class EmployeeDashComponent implements OnInit {
  formvalue: FormGroup = new FormGroup({});
  employeeModelObj: EmployeeModel = new EmployeeModel();
  employeeData: any;
  showAdd !: boolean;
  showupdate !: boolean;

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }


  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      salary: ['', Validators.required]
    });

    this.getAllEmployee();
  }
  clickAddEmployee = () => {
    this.formvalue.reset();
    this.showAdd = true;
    this.showupdate = false;
  }

  postEmployeeDetails() {
    this.employeeModelObj.firstName = this.formvalue.value.firstName;
    this.employeeModelObj.lastName = this.formvalue.value.lastName;
    this.employeeModelObj.email = this.formvalue.value.email;
    this.employeeModelObj.mobile = this.formvalue.value.mobile;
    this.employeeModelObj.salary = this.formvalue.value.salary;

    this.api.postEmploye(this.employeeModelObj).subscribe(res => {
      console.log(res);
      alert("Employee Added successfully");
      let ref = document.getElementById('clear')
      ref?.click();

      this.formvalue.reset();
      this.getAllEmployee();
    },
      err => {
        alert("Something went wrong");
      }
    )
  }

  getAllEmployee() {
    this.api.getEmploye()
      .subscribe(res => {
        this.employeeData = res;
      })
  }

  deleteEmploye(data: any) {
    // console.log("This is the id of the service: ", data.id)
    this.api.deleteEmploye(data.id)
      .subscribe(res => {
        console.log(res)
        alert("Employee deleted successfully");
        this.getAllEmployee();
      })
  }

  onEdit(data: any) {
    this.showAdd = false;
    this.showupdate = true;
    this.employeeModelObj.id = data.id;
    this.formvalue.controls['firstName'].setValue(data.firstName);
    this.formvalue.controls['lastName'].setValue(data.lastName);
    this.formvalue.controls['email'].setValue(data.email);
    this.formvalue.controls['mobile'].setValue(data.mobile);
    this.formvalue.controls['salary'].setValue(data.salary);
  }

  updateEmployeeDetails() {
    this.employeeModelObj.firstName = this.formvalue.value.firstName;
    this.employeeModelObj.lastName = this.formvalue.value.lastName;
    this.employeeModelObj.email = this.formvalue.value.email;
    this.employeeModelObj.mobile = this.formvalue.value.mobile;
    this.employeeModelObj.salary = this.formvalue.value.salary;

    this.api.updateEmploye(this.employeeModelObj, this.employeeModelObj.id)
      .subscribe(res => {
        alert("Updated Successfully!");

        let ref = document.getElementById('clear')
        ref?.click();

        this.formvalue.reset();
        this.getAllEmployee();

      })
  }
}
