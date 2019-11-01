import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { AlertController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-pedido',
  templateUrl: './add-pedido.page.html',
  styleUrls: ['./add-pedido.page.scss'],
})
export class AddPedidoPage implements OnInit {

  protected pedido: Pedido = new Pedido;
  protected id: any = null;

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 3,
    speed: 400
  };

  constructor(
    protected pedidoService: PedidoService,
    protected alertController: AlertController,
    protected activedRoute: ActivatedRoute,
    protected router: Router,
    protected platform: Platform
  ) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.pedidoService.get(this.id).subscribe(
        res => {
          this.pedido = res
        },
        //erro => this.id = null
      )
    }
  }

  onsubmit(form) {
    if (!this.id) {
      this.pedidoService.save(this.pedido).then(
        res => {
          form.reset();
          this.pedido = new Pedido;
          //console.log("Cadastrado!");
          //this.preview = null
          this.presentAlert("Aviso", "Cadastrado!")
          this.router.navigate(['', res.id]);
        },
        erro => {
          console.log("Erro: " + erro);
          this.presentAlert("Erro", "Não foi possivel cadastrar!")
        }
      )
    }
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
