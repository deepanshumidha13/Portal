import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagecfgComponent } from './stagecfg.component';

describe('StagecfgComponent', () => {
  let component: StagecfgComponent;
  let fixture: ComponentFixture<StagecfgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagecfgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StagecfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
