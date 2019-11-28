import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphVisaulizerComponent } from './graph-visaulizer.component';

describe('GraphVisaulizerComponent', () => {
  let component: GraphVisaulizerComponent;
  let fixture: ComponentFixture<GraphVisaulizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GraphVisaulizerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphVisaulizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
