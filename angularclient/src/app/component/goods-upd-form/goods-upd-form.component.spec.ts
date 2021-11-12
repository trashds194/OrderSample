import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsUpdFormComponent } from './goods-upd-form.component';

describe('GoodsUpdFormComponent', () => {
  let component: GoodsUpdFormComponent;
  let fixture: ComponentFixture<GoodsUpdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsUpdFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsUpdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
