import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsetsusapartComponent } from './whatsetsusapart.component';

describe('WhatsetsusapartComponent', () => {
  let component: WhatsetsusapartComponent;
  let fixture: ComponentFixture<WhatsetsusapartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsetsusapartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatsetsusapartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
