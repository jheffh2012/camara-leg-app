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
    component.deputado.nome = "Deputado Teste";
    component.deputado.siglaPartido = "PCOR";
    component.deputado.email = "deputado@teste.com.br"
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render data of deputado', () => {
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled.querySelector('div h5'));
    expect(compiled.querySelector('.deputado-nome').textContent).toContain('Deputado Teste');
    expect(compiled.querySelector('.deputado-sigla').textContent).toContain('PCOR');
  });
});
