import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {COUNTRIES_DATA} from "../../../../../utils/CountriesData";
import {DeliveryDetailsService} from "../../../../services/delivery-details.service";
import {DeliveryDetails} from "../../../../models/delivery-details";
import {JwtService} from "../../../../services/jwt.service";

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
export class ProfileAddressesComponent implements OnInit {
  showAddressModal = false;
  editingAddress: DeliveryDetails | null = null;
  countries = COUNTRIES_DATA;
  selectedCountry: any;
  phonePrefix: string = '';

  addresses: DeliveryDetails[] = [];

  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private deliveryDetailsService: DeliveryDetailsService, private jwtService: JwtService) {
    this.addressForm = this.fb.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      region: ['', Validators.required],
      postalCode: ['', Validators.required],
      phone: ['', Validators.required],
      country: [null, Validators.required],
      isPrimary: [false]
    });

    this.addressForm.get('country')?.valueChanges.subscribe(country => {
      this.selectedCountry = country;
      this.phonePrefix = country?.dialling_code || '';
      this.formatPhoneNumber();
    });
  }

  async ngOnInit(): Promise<void> {
    this.addresses = await this.deliveryDetailsService.getUserDeliveryDetails();
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
      isPrimary: false,
      country: this.countries.find(c => c.code === 'PT')
    });
    this.showAddressModal = true;
  }

  editAddress(address: DeliveryDetails) {
    this.editingAddress = address;
    const country = this.countries.find(c => c.name === address.country);
    this.phonePrefix = country?.dialling_code || '';

    // Extract phone number without prefix
    const phoneStrings = address.phone.split(' ');

    this.addressForm.patchValue({
      ...address,
      country: country,
      phone: phoneStrings[1]
    });
    this.showAddressModal = true;
  }

  async saveAddress() {
    if (this.addressForm.invalid) return;

    const formValue = this.addressForm.value;
    const addressData = {
      ...formValue,
      country: formValue.country.name,
      phone: `${this.phonePrefix} ${formValue.phone}`.trim()
    };

    if (addressData.isPrimary) {
      this.addresses.forEach(addr => addr.isPrimary = false);
    }

    if (this.editingAddress) {
      const index = this.addresses.findIndex(a => a.id === this.editingAddress!.id);
      const updatedAddress = await this.deliveryDetailsService.updateDeliveryDetails({...this.editingAddress, ...addressData});
      this.addresses[index] = {...this.editingAddress, ...updatedAddress};
    } else {
      const newAddress: DeliveryDetails = {
        id: Date.now().toString(),
        ...addressData
      };
      newAddress.userId = this.jwtService.decodeToken(this.jwtService.getToken()!).id;
      const saved = await this.deliveryDetailsService.saveDeliveryDetails(newAddress);
      this.addresses.push(saved);
    }

    this.closeModal();
  }

  deleteAddress(id: string) {
    if (confirm('Tem a certeza que deseja eliminar este endereço?')) {
      this.deliveryDetailsService.deleteDeliveryDetails(id);
      this.addresses = this.addresses.filter(a => a.id !== id);
    }
  }

  setAsPrimary(id: string) {
    this.addresses.forEach(addr => {
      if (addr.id === id) {
        this.deliveryDetailsService.updateDeliveryDetails(addr);
      }
      addr.isPrimary = addr.id === id;
    });
  }

  closeModal() {
    this.showAddressModal = false;
    this.addressForm.reset();
  }
}
