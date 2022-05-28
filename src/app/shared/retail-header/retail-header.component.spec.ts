import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailHeaderComponent } from './retail-header.component';

describe('RetailHeaderComponent', () => {
  let component: RetailHeaderComponent;
  let fixture: ComponentFixture<RetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
