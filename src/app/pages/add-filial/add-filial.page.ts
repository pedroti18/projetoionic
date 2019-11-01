import { Component, OnInit } from '@angular/core';
import { Filial } from 'src/app/model/filial';
import { FilialService } from 'src/app/services/filial.service';
import { AlertController, Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-filial',
  templateUrl: './add-filial.page.html',
  styleUrls: ['./add-filial.page.scss'],
})
export class AddFilialPage implements OnInit {

  protected filial: Filial = new Filial;
  protected id: any = null;

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 3,
    speed: 400
  };

  constructor(
    protected filialService: FilialService,
    protected alertController: AlertController,
    protected activedRoute: ActivatedRoute,
    protected router: Router,
    protected platform: Platform
  ) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.filialService.get(this.id).subscribe(
        res => {
          this.filial = res
        },
        //erro => this.id = null
      )
    }
  }

  onsubmit(form) {
    if (!this.id) {
      this.filialService.save(this.filial).then(
        res => {
          form.reset();
          this.filial = new Filial;
          //console.log("Cadastrado!");
          //this.preview = null
          this.presentAlert("Aviso", "Cadastrado!")
          this.router.navigate(['/tabs/perfilFilial', res.id]);
        },
        erro => {
          console.log("Erro: " + erro);
          this.presentAlert("Erro", "Não foi possivel cadastrar!")
        }
      )
    } else {
      this.filialService.update(this.filial, this.id).then(
        res => {
          form.reset();
          this.filial = new Filial;
          //this.preview = null
          this.presentAlert("Aviso", "Atualizado!")
          this.router.navigate(['/tabs/perfilFilial', this.id]);
        },
        erro => {
          console.log("Erro: " + erro);
          this.presentAlert("Erro", "Não foi possivel atualizar!")
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
