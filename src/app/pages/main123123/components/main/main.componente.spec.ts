import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponente } from './main.componente';

describe('MainComponent', () => {
  let component: MainComponente;
  let fixture: ComponentFixture<MainComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponente ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
