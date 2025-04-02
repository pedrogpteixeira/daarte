import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-profile-addresses',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './profile-addresses.component.html',
  styleUrl: './profile-addresses.component.css'
})
export class ProfileAddressesComponent {
  showAddressModal = false;
  editingAddress: any = null;

  addresses = [
    {
      id: '1',
      type: 'home',
      street: '123 Main Street',
      city: 'Lisbon',
      postalCode: '1000-001',
      country: 'Portugal',
      primary: true
    },
    {
      id: '2',
      type: 'work',
      street: '456 Business Ave',
      city: 'Lisbon',
      postalCode: '1000-002',
      country: 'Portugal',
      primary: false
    }
  ];

  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      type: ['home', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
      primary: [false]
    });
  }

  openAddAddressModal() {
    this.editingAddress = null;
    this.addressForm.reset({
      type: 'home',
      primary: false
    });
    this.showAddressModal = true;
  }

  editAddress(address: any) {
    this.editingAddress = address;
    this.addressForm.patchValue(address);
    this.showAddressModal = true;
  }

  saveAddress() {
    if (this.addressForm.invalid) return;

    const addressData = this.addressForm.value;

    if (addressData.primary) {
      this.addresses.forEach(addr => addr.primary = false);
    }

    if (this.editingAddress) {
      // Update existing address
      const index = this.addresses.findIndex(a => a.id === this.editingAddress.id);
      this.addresses[index] = {...this.editingAddress, ...addressData};
    } else {
      // Add new address
      const newAddress = {
        id: Date.now().toString(),
        ...addressData
      };
      this.addresses.push(newAddress);
    }

    this.closeModal();
  }

  deleteAddress(id: string) {
    if (confirm('Are you sure you want to delete this address?')) {
      this.addresses = this.addresses.filter(a => a.id !== id);
    }
  }

  setAsPrimary(id: string) {
    this.addresses.forEach(addr => {
      addr.primary = addr.id === id;
    });
  }

  closeModal() {
    this.showAddressModal = false;
    this.addressForm.reset();
  }
}
