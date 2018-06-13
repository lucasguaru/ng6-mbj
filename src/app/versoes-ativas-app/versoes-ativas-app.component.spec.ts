import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersoesAtivasAppComponent } from './versoes-ativas-app.component';

describe('VersoesAtivasAppComponent', () => {
  let component: VersoesAtivasAppComponent;
  let fixture: ComponentFixture<VersoesAtivasAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersoesAtivasAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersoesAtivasAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
