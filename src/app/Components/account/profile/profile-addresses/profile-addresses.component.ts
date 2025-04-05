import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {COUNTRIES_DATA} from "../../../../../utils/CountriesData";

interface Address {
  id: string;
  type: string;
  name: string;
  street: string;
  city: string;
  region: string;
  postalCode: string;
  phone: string;
  country: string;
  primary: boolean;
}

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
  editingAddress: Address | null = null;
  countries = COUNTRIES_DATA;
  selectedCountry: any;
  phonePrefix: string = '';

  addresses: Address[] = [
    {
      id: '1',
      type: 'Home',
      name: 'Pedro Teixeira',
      street: 'Rua das Flores, 123',
      city: 'Lisboa',
      region: 'Lisboa',
      postalCode: '1000-001',
      phone: '+351 912 345 678',
      country: 'Portugal',
      primary: true
    },
    {
      id: '2',
      type: 'Work',
      name: 'Maria Silva',
      street: 'Avenida da Liberdade, 456',
      city: 'Lisboa',
      region: 'Lisboa',
      postalCode: '1000-002',
      phone: '+351 912 345 679',
      country: 'Portugal',
      primary: false
    },
    {
      id: '3',
      type: 'Other',
      name: 'João Pereira',
      street: 'Rua da Prata, 789',
      city: 'Lisboa',
      region: 'Lisboa',
      postalCode: '1000-003',
      phone: '+351 912 345 680',
      country: 'Portugal',
      primary: false
    }
  ];

  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      region: ['', Validators.required],
      postalCode: ['', Validators.required],
      phone: ['', Validators.required],
      country: [null, Validators.required],
      primary: [false]
    });

    this.addressForm.get('country')?.valueChanges.subscribe(country => {
      this.selectedCountry = country;
      this.phonePrefix = country?.dialling_code || '';
      this.formatPhoneNumber();
    });
  }

  formatPhoneNumber() {
    const phoneControl = this.addressForm.get('phone');
    if (phoneControl) {
      let currentPhone = phoneControl.value || '';
      // Remove tudo que não for dígito
      currentPhone = currentPhone.replace(/\D/g, '');
      phoneControl.setValue(currentPhone, {emitEvent: false});
    }
  }

  shouldShowError(controlName: string): boolean {
    const control = this.addressForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  openAddAddressModal() {
    this.editingAddress = null;
    this.addressForm.reset({
      primary: false,
      country: this.countries.find(c => c.code === 'PT')
    });
    this.showAddressModal = true;
  }

  editAddress(address: Address) {
    this.editingAddress = address;
    const country = this.countries.find(c => c.name === address.country);
    this.phonePrefix = country?.dialling_code || '';

    // Extract phone number without prefix
    const phoneWithoutPrefix = address.phone.replace(new RegExp(`^\\+?${this.phonePrefix}\\s?`), '');

    this.addressForm.patchValue({
      ...address,
      country: country,
      phone: phoneWithoutPrefix
    });
    this.showAddressModal = true;
  }

  saveAddress() {
    if (this.addressForm.invalid) return;

    const formValue = this.addressForm.value;
    const addressData = {
      ...formValue,
      country: formValue.country.name,
      phone: `${this.phonePrefix} ${formValue.phone}`.trim()
    };

    if (addressData.primary) {
      this.addresses.forEach(addr => addr.primary = false);
    }

    if (this.editingAddress) {
      const index = this.addresses.findIndex(a => a.id === this.editingAddress!.id);
      this.addresses[index] = {...this.editingAddress, ...addressData};
    } else {
      const newAddress: Address = {
        id: Date.now().toString(),
        ...addressData
      };
      this.addresses.push(newAddress);
    }

    console.log('Address saved:', addressData);

    this.closeModal();
  }

  deleteAddress(id: string) {
    if (confirm('Tem a certeza que deseja eliminar este endereço?')) {
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
