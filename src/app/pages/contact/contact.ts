import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact';
import { NavbarComponent } from '../../components/navbar/navbar';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  success = false;
  error = false;
  contactForm;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    const payload = {
      name: this.contactForm.value.name || '',
      email: this.contactForm.value.email || '',
      phone: this.contactForm.value.phone || '',
      message: this.contactForm.value.message || '',
    };

    this.contactService.sendMessage(payload).subscribe({
      next: () => {
        this.success = true;
        this.error = false;
        this.contactForm.reset();
      },
      error: () => {
        this.error = true;
        this.success = false;
      },
    });
  }
}
