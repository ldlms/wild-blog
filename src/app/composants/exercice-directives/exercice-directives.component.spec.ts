import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceDirectivesComponent } from './exercice-directives.component';

describe('ExerciceDirectivesComponent', () => {
  let component: ExerciceDirectivesComponent;
  let fixture: ComponentFixture<ExerciceDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
