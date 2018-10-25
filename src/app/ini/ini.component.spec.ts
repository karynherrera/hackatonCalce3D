import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniComponent } from './ini.component';

describe('IniComponent', () => {
  let component: IniComponent;
  let fixture: ComponentFixture<IniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
