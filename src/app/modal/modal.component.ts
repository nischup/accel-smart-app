import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

  hour: number | string = '';  
  minute: number | string = ''; 
  timePeriod: string = 'AM';  

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    // You can also dismiss the modal from within the modal component
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
