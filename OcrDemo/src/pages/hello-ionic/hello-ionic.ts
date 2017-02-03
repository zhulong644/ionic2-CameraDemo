import { Component } from '@angular/core';
import {Camera} from "ionic-native";
import {ModalController} from "ionic-angular";
import {ResultIonicPage} from "../result/result-ionic";


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  public base64Image: string;

  constructor(public modalCtrl: ModalController) {

  }
  takePicture () {
    // this.sending = true;

    const options = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      correctOrientation: true,
      targetWidth: 1000,
      targetHeight: 1000
    };

    Camera.getPicture(options)
      .then(imageData => {
        // this.patient.image = 'data:image/jpeg;base64,' + imageData;
        // this.send();
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log('success' );
      })
      .catch(err => {
        // this.sending = false;
        console.log('faild');
      });
  }
  presentModal() {
    let modal = this.modalCtrl.create(ResultIonicPage);
    modal.present();
  }

}
