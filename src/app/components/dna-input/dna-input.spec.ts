import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnaInput } from './dna-input';

describe('DnaInput', () => {
  let component: DnaInput;
  let fixture: ComponentFixture<DnaInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DnaInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnaInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
