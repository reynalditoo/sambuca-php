/*import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';

@Component({
  selector: 'contact-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  @ViewChild('isSent') isSent: ElementRef;
  @ViewChild('isNotSent') isNotSent: ElementRef;
  @ViewChild('f') signupForm: NgForm;

  user = {
  	name: '',
	  email: '',
  	message: ''
  };

  msgSent: boolean = false;
  msgNotSent: boolean = false;

  onSubmit() {
  	this.user.name = this.signupForm.value.name;
  	this.user.email = this.signupForm.value.email;
  	this.user.message = this.signupForm.value.message;
  	console.log(this.signupForm.value);
  	console.log(this.signupForm.valid);
    this.contactService.sendingForm(this.user).subscribe(data => {
    if (data.success) {// /routes/contact-form.js l.45 : res.json({success: true, msg: 'Your message : ' + mailOptions.html + 'was sent !'});
      console.log('L\'email a bien été envoyé !');
      this.msgSent = true;
      /*setTimeout(() => {
        this.isSent.nativeElement.style.display = 'none';},
      6000);*/
/*    } else {
      console.log('Something went wrong');
      this.msgNotSent = true;
      /*setTimeout(() => {
        this.isNotSent.nativeElement.style.display = 'none';},
      6000);*/
/*    }
  });
  }

}*/

import { Component, ViewChild, ElementRef } from '@angular/core';
import { ContactService, IMessage } from './contact.service';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @ViewChild('f') signupForm: NgForm;
  @ViewChild('isSent') isSent: ElementRef;
  @ViewChild('notSent') notSent: ElementRef;
  
  form: IMessage = {};
  msgSent: boolean = false;
  msgNotSent: boolean = false;
 
  constructor(private contactService: ContactService) {}
 
  sendMail(form: IMessage) 
  {
    this.contactService.sendMail(form).subscribe(data => 
    {
      if (data) 
      {
        console.log(data);
        this.msgSent = true;
        setTimeout(() => {
          this.isSent.nativeElement.style.display = 'none';},
        4000);
      } else {
              console.log('Something went wrong');
              this.msgNotSent = true;
              setTimeout(() => {
                this.notSent.nativeElement.style.display = 'none';},
              4000);
            }
    })
  }
}