import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvisitComponent } from './myvisit.component';

describe('MyvisitComponent', () => {
  let component: MyvisitComponent;
  let fixture: ComponentFixture<MyvisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyvisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
