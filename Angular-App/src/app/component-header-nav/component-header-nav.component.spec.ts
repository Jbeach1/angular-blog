import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHeaderNavComponent } from './component-header-nav.component';

describe('ComponentHeaderNavComponent', () => {
  let component: ComponentHeaderNavComponent;
  let fixture: ComponentFixture<ComponentHeaderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentHeaderNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentHeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
