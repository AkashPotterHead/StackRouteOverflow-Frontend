import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionThreadViewerComponent } from './question-thread-viewer.component';

describe('QuestionThreadViewerComponent', () => {
  let component: QuestionThreadViewerComponent;
  let fixture: ComponentFixture<QuestionThreadViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionThreadViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionThreadViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
