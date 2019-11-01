import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    protected fire: AngularFirestore
    
  ) { }

  save(pedido) {
    return this.fire.collection("pedidos")
      .add({
        descricao: pedido.descricao,
        categoria: pedido.categoria,
        nome: pedido.nome,
        telefone: pedido.telefone,
        endereco: pedido.endereco,
        bairro: pedido.bairro,
        numero: pedido.numero
      });
  }

  getAll() {
    return this.fire.collection("pedidos").snapshotChanges()
      .pipe(
        map(dados =>
          dados.map(d => ({ key: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      )
  }

  get(id) {
    return this.fire.collection("pedidos").doc<Pedido>(id).valueChanges();
  }
}