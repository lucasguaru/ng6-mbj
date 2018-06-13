import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersoesAtivasDetailComponent } from './versoes-ativas-detail.component';

describe('VersoesAtivasDetailComponent', () => {
  let component: VersoesAtivasDetailComponent;
  let fixture: ComponentFixture<VersoesAtivasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersoesAtivasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersoesAtivasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
