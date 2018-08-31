import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Contato } from '../../models/contato';
import { ContatoServiceProvider } from '../../providers/contato-service/contato-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  public contatos: Contato[] = [{
    id:1,
    nome:'nome de voces',
    telefone:'123456789',
    descricao: 'descricao',
  }];

  constructor(public navCtrl: NavController, private _contatoService: ContatoServiceProvider, private _loadingCtrl: LoadingController, private _alertCtrl: AlertController) {}

  ionViewDidEnter() {
   
  }

  public adicionarContato() {
    this.navCtrl.push('ContatoPage');
  
  }
  

}
