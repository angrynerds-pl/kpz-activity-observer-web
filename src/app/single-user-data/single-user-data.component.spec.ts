import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserDataComponent } from './single-user-data.component';

describe('SingleUserDataComponent', () => {
  let component: SingleUserDataComponent;
  let fixture: ComponentFixture<SingleUserDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleUserDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
