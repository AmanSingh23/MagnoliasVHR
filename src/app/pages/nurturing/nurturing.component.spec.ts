import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurturingComponent } from './nurturing.component';

describe('NurturingComponent', () => {
  let component: NurturingComponent;
  let fixture: ComponentFixture<NurturingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurturingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NurturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
