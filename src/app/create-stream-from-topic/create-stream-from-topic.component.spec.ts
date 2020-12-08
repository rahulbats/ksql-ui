import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStreamFromTopicComponent } from './create-stream-from-topic.component';

describe('CreateStreamFromTopicComponent', () => {
  let component: CreateStreamFromTopicComponent;
  let fixture: ComponentFixture<CreateStreamFromTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStreamFromTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStreamFromTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
