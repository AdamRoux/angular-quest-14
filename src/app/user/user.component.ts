import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isSubmitted = false
  username = new FormControl('');
  email = new FormControl('')
  password = new FormControl('')
  address = new FormControl('')

  newUser(){
    this.isSubmitted = !this.isSubmitted
  }

}
