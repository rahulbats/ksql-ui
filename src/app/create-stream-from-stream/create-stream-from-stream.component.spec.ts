import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStreamFromStreamComponent } from './create-stream-from-stream.component';

describe('CreateStreamFromStreamComponent', () => {
  let component: CreateStreamFromStreamComponent;
  let fixture: ComponentFixture<CreateStreamFromStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStreamFromStreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStreamFromStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
