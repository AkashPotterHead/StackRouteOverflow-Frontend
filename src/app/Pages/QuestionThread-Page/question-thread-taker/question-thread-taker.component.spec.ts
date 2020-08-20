import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionThreadTakerComponent } from './question-thread-taker.component';

describe('QuestionThreadTakerComponent', () => {
  let component: QuestionThreadTakerComponent;
  let fixture: ComponentFixture<QuestionThreadTakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionThreadTakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionThreadTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
