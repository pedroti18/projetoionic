import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FilialService } from 'src/app/services/filial.service';

@Component({
  selector: 'app-list-filial',
  templateUrl: './list-filial.page.html',
  styleUrls: ['./list-filial.page.scss'],
})

export class ListFilialPage implements OnInit {

  protected filias: any;

  constructor(
    protected filialService: FilialService,
    protected router: Router,
    protected alertController: AlertController
  ) { }

  ngOnInit() {
    this.filialService.getAll().subscribe(
      res => {
        this.filias = res;
      }
    )
  }

  editar(filial) {
    this.router.navigate(['/tabs/addFilial/', filial.key])
  }

  async doRefresh(event) {
    //console.log('Begin async operation');
    this.filialService.getAll().subscribe(
      res => {
        this.filias = res;
        setTimeout(() => {
          //console.log('Async operation has ended');
          event.target.complete();
        }, 500);
      }
    );
  }

  async apagar(filial) {
    const alert = await this.alertController.create({
      header: 'Apagar dados!',
      message: 'Apagar todos os dados da filial',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.filialService.remove(filial).then(
              res => {
                this.presentAlert("Aviso", "Apagado com sucesso!");
                this.refreshFilias();
              },
              erro => {
                this.presentAlert("Erro", "Ao apagar o item!");
              }
            )
          }
        }
      ]
    });
    await alert.present();
  }

  refreshFilias() {
    this.filialService.getAll().subscribe(
      res => {
        this.filias = res;
      }
    )
  }

  //Alerts-------------------
  async presentAlert(tipo: string, texto: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
  }
}