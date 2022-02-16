import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenViewComponent } from './gen-view.component';

describe('GenViewComponent', () => {
  let component: GenViewComponent;
  let fixture: ComponentFixture<GenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
