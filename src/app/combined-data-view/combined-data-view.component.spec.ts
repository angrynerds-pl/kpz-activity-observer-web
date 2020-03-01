import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedDataViewComponent } from './combined-data-view.component';

describe('CombinedDataViewComponent', () => {
  let component: CombinedDataViewComponent;
  let fixture: ComponentFixture<CombinedDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinedDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
