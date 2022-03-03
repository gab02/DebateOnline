import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCandidatoComponent } from './preview-candidato.component';

describe('PreviewCandidatoComponent', () => {
  let component: PreviewCandidatoComponent;
  let fixture: ComponentFixture<PreviewCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewCandidatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
