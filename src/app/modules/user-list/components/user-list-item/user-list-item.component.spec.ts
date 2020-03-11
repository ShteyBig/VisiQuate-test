import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListItemComponent } from './user-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserListItemComponent', () => {
  let component: UserListItemComponent;
  let fixture: ComponentFixture<UserListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ UserListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
