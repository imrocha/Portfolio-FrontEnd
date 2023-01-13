import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPresentacionComponent } from './body-presentacion.component';

describe('BodyPresentacionComponent', () => {
  let component: BodyPresentacionComponent;
  let fixture: ComponentFixture<BodyPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyPresentacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
