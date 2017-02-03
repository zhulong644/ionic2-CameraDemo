/**
 * Created by zhulong on 2017/2/2.
 */
import { Component } from '@angular/core';
import {Camera} from "ionic-native";
import {ViewController} from "ionic-angular";


@Component({
  selector: 'result-ionic',
  templateUrl: 'result-ionic.html'
})
export class ResultIonicPage {

  public base64Image: string;

  constructor(public viewCtrl: ViewController) {

  }
  close() {
    this.viewCtrl.dismiss();
  }
}
