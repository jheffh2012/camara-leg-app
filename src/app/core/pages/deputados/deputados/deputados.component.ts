import { Component, OnInit } from '@angular/core';
import { DeputadosService } from 'src/app/core/services/deputados.service';
import { DeputadoItem } from 'src/app/core/models/deputado-item.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.component.html',
  styleUrls: ['./deputados.component.css']
})
export class DeputadosComponent implements OnInit {

  public deputados: DeputadoItem[];
  public loaded = new BehaviorSubject<boolean>(false);
  public loaded$ = this.loaded.asObservable();

  constructor(
    protected deputadoService: DeputadosService
  ) {
    this.loaded.next(false);
  }

  ngOnInit() {
    this.load().then(
      success => {
        this.loaded.next(true);
      }
    );
  }

  load = async () => {
    this.deputados = await this.deputadoService.deputados() as DeputadoItem[];
  }
}
