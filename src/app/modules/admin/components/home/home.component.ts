import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from 'src/app/interfaces/player';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  listUsuarios: Player[] = [];

  displayedColumns: string[] = ['name', 'surname', 'age', 'position', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _playerService: PlayerService) { }

  ngOnInit(): void {
    this.cargarUsuarios(); 
  }

  cargarUsuarios() {
    this.listUsuarios = this._playerService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number) {
    this._playerService.eliminarUsuario(index);
    this.cargarUsuarios();
  }
}
