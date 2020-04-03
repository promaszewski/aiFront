import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvisitComponent } from './upvisit.component';

describe('UpvisitComponent', () => {
  let component: UpvisitComponent;
  let fixture: ComponentFixture<UpvisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpvisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
