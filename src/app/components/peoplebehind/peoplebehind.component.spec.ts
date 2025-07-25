import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplebehindComponent } from './peoplebehind.component';

describe('PeoplebehindComponent', () => {
  let component: PeoplebehindComponent;
  let fixture: ComponentFixture<PeoplebehindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeoplebehindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeoplebehindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
