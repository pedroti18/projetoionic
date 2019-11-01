import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Filial } from '../model/filial';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilialService {

  constructor(
    protected fire: AngularFirestore

  ) { }


  save(filial) {
    return this.fire.collection("filias")
      .add({
        nome: filial.nome,
        descricao: filial.descricao,
        endereco: filial.endereco,
        numero: filial.numero,
        bairro: filial.bairro,

      });
  }

  getAll() {
    return this.fire.collection("filias").snapshotChanges()
      .pipe(
        map(dados =>
          dados.map(d => ({ key: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      )
  }

  get(id) {
    return this.fire.collection("filias").doc<Filial>(id).valueChanges();
  }
  update(filial: Filial, id: string) {
    return this.fire.collection("filias").doc<Filial>(id)
      .update(filial);
  }

  remove(filial: any) {
    return this.fire.collection("filias").doc(filial.key).delete();
  }
}



