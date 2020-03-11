import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposViewComponent } from './repos-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material';

describe('ReposViewComponent', () => {
  let component: ReposViewComponent;
  let fixture: ComponentFixture<ReposViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, MatDialogModule], 
      declarations: [ ReposViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
