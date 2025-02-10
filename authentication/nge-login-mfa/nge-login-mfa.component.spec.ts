import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgeLoginMfaComponent } from './nge-login-mfa.component';

describe('NgeLoginMfaComponent', () => {
  let component: NgeLoginMfaComponent;
  let fixture: ComponentFixture<NgeLoginMfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgeLoginMfaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgeLoginMfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
