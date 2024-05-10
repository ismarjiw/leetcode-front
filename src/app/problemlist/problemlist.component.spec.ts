import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemlistComponent } from './problemlist.component';

describe('ProblemlistComponent', () => {
  let component: ProblemlistComponent;
  let fixture: ComponentFixture<ProblemlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProblemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
