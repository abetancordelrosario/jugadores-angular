import { Injectable } from '@angular/core';
import { Player } from '../../interfaces/player';
import { players } from '../../services/player/players'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  listPlayers: Player[] = [{name: "Jonathan", surname: "Viera Ramos", age: 32, position: "Centrocampista"}]

  constructor() { }

  getUsuario() {
    return this.listPlayers.slice();
  }

  eliminarUsuario(index: number) {
    this.listPlayers.splice(index, 1);
  }

  agregarUsuario(usuario: Player) {
    this.listPlayers.unshift(usuario);
  }
}
