import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StatsComponent } from './stats.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        StatsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(StatsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-ntpd-gist'`, () => {
    const fixture = TestBed.createComponent(StatsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-ntpd-gist');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(StatsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng-ntpd-gist!');
  });
});
