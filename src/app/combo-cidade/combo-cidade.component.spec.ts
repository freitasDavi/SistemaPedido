import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboCidadeComponent } from './combo-cidade.component';

describe('ComboCidadeComponent', () => {
  let component: ComboCidadeComponent;
  let fixture: ComponentFixture<ComboCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboCidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
