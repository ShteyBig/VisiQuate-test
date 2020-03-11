import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchComponent } from './user-search.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
