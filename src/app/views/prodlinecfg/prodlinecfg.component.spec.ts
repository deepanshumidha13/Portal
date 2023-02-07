import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdlinecfgComponent } from './prodlinecfg.component';

describe('ProdlinecfgComponent', () => {
  let component: ProdlinecfgComponent;
  let fixture: ComponentFixture<ProdlinecfgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdlinecfgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdlinecfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
