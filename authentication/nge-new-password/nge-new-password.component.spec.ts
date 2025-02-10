import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgeNewPasswordComponent } from './nge-new-password.component';

describe('NgeNewPasswordComponent', () => {
  let component: NgeNewPasswordComponent;
  let fixture: ComponentFixture<NgeNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgeNewPasswordComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgeNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
