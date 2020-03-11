import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ UserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
