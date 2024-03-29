import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { AddressEntry } from '../address-entry';
import {NotificationService} from '../notification.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-address-list-element',
  templateUrl: './address-list-element.component.html',
  styleUrls: ['./address-list-element.component.css']
})
export class AddressListElementComponent implements OnInit {
  @Input() address: AddressEntry;
  selected = false;
  subscription: Subscription;
  constructor(private notificationService: NotificationService) {
    this.subscription = this.notificationService.selectedElement.subscribe(newAddress => {
      this.selected = newAddress === this.address ? true : false;
   });
  }

  ngOnInit(): void {

  }
  getFullName(): string {
    return `${this.address.firstName}, ${this.address.lastName}`;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
