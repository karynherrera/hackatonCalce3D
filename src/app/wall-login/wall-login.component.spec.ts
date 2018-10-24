import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallLoginComponent } from './wall-login.component';

describe('WallLoginComponent', () => {
  let component: WallLoginComponent;
  let fixture: ComponentFixture<WallLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
