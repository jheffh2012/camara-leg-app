import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputadosComponent } from './deputados.component';
import { DeputadoItemComponent } from '../deputado-item/deputado-item.component';
import { HttpClient } from '@angular/common/http';

describe('DeputadosComponent', () => {
  let component: DeputadosComponent;
  let fixture: ComponentFixture<DeputadosComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      declarations: [ DeputadosComponent, DeputadoItemComponent ],
      providers: [
        {provide: HttpClient, useValue: spy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeputadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
