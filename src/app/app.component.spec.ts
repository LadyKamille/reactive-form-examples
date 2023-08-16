import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { LoginComponent } from './basic_form/login/login.component';
import { MaterialTestingModule } from '../testing/material-testing.module';
import { MatDividerModule } from '@angular/material/divider';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [LoginComponent, MatDividerModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'reactive-form-examples'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('reactive-form-examples');
  });
});
