import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustBatchesComponent } from './trust-batches.component';

describe('TrustBatchesComponent', () => {
  let component: TrustBatchesComponent;
  let fixture: ComponentFixture<TrustBatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustBatchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrustBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
