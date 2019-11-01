import { Component, OnInit } from '@angular/core';
import { Filial } from 'src/app/model/filial';
import { FilialService } from 'src/app/services/filial.service';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-perfil-filial',
  templateUrl: './perfil-filial.page.html',
  styleUrls: ['./perfil-filial.page.scss'],
})
export class PerfilFilialPage implements OnInit {

  protected filial: Filial = new Filial;
  private id: string = null;

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 3,
    speed: 400
  };

  constructor(
    protected filialService: FilialService,
    protected activatedRoute: ActivatedRoute,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.filialService.get(this.id).subscribe(
        res => {
          this.filial = res
        }
      )
    }
  }
}