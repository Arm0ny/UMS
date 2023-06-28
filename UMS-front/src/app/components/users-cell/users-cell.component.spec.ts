import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCellComponent } from './users-cell.component';

describe('UsersCellComponent', () => {
  let component: UsersCellComponent;
  let fixture: ComponentFixture<UsersCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
