import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/interfaces/player';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {

  players: Player[] = [];

  position: any[] = ['Portero', 'Centrocampista', 'Defensa', 'Delantero'];

  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private _player: PlayerService, 
              private router: Router, 
              private activate: ActivatedRoute) { 
    let id = this.activate.snapshot.params['id']
    var name, surname, age, position = ''
    this.cargarUsuarios()
    if(id !== undefined) {
      name = this.players[id].name
      surname = this.players[id].surname
      age = this.players[id].age
      position = this.players[id].position
      this.eliminarUsuario(id)
    }
    this.form = this.fb.group({
      name: [name, Validators.required],
      surname: [surname, Validators.required],
      age: [age, Validators.required],
      position: [position, Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  agregarUsuario() {
    const player: Player = {
      name: this.form.value.name,
      surname: this.form.value.surname,
      age: this.form.value.age,
      position: this.form.value.position
    }
    this._player.agregarUsuario(player);
    this.router.navigate(['/admin/home'])
  }

  cargarUsuarios() {
    this.players = this._player.getUsuario();
  }

  eliminarUsuario(index: number) {
    this._player.eliminarUsuario(index);
  }

}

