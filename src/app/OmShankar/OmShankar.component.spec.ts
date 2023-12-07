import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmShankarComponent } from './OmShankar.component';

describe('OmShankarComponent', () => {
  let component: OmShankarComponent;
  let fixture: ComponentFixture<OmShankarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmShankarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmShankarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
