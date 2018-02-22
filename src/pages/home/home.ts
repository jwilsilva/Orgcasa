import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MercadoPage } from "../mercado/mercado";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public somar(numero1:number, numero2:number){
		alert(numero1 + numero2);
	}

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
public paginaMercado(){
	//  
	this.navCtrl.push(MercadoPage); 
}

}
