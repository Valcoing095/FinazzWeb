import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHistoryComponentComponent } from './create-history-component.component';

describe('CreateHistoryComponentComponent', () => {
  let component: CreateHistoryComponentComponent;
  let fixture: ComponentFixture<CreateHistoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHistoryComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateHistoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
