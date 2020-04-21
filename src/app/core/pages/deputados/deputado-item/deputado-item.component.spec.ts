import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputadoItemComponent } from './deputado-item.component';
import { DeputadoItem } from 'src/app/core/models/deputado-item.model';

describe('DeputadoItemComponent', () => {
  let component: DeputadoItemComponent;
  let fixture: ComponentFixture<DeputadoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeputadoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeputadoItemComponent);
    component = fixture.componentInstance;
    component.deputado = new DeputadoItem();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
