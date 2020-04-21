import { Component, OnInit, Input } from '@angular/core';
import { DeputadoItem } from 'src/app/core/models/deputado-item.model';

@Component({
  selector: 'deputado-item',
  templateUrl: './deputado-item.component.html',
  styleUrls: ['./deputado-item.component.css']
})
export class DeputadoItemComponent implements OnInit {

  @Input() public deputado: DeputadoItem;

  constructor() { }

  ngOnInit() {
  }

}
