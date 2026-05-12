import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SectionTitleComponent } from './section-title';

describe('SectionTitleComponent', () => {
  let fixture: ComponentFixture<SectionTitleComponent>;
  let component: SectionTitleComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTitleComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SectionTitleComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the label text', () => {
    fixture.componentRef.setInput('label', 'Section Label');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.section-title__label')?.textContent).toContain('Section Label');
  });

  it('renders the heading text', () => {
    fixture.componentRef.setInput('heading', 'Section Heading');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.section-title__heading')?.textContent).toContain('Section Heading');
  });

  it('does not render subheading element when input is empty', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.section-title__sub')).toBeNull();
  });

  it('renders subheading when provided', () => {
    fixture.componentRef.setInput('subheading', 'Subtitle text');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.section-title__sub')?.textContent).toContain('Subtitle text');
  });

  it('updates label reactively', () => {
    fixture.componentRef.setInput('label', 'First');
    fixture.detectChanges();
    fixture.componentRef.setInput('label', 'Second');
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.section-title__label')?.textContent).toContain('Second');
  });

  it('shows and hides subheading based on input presence', () => {
    const el: HTMLElement = fixture.nativeElement;
    fixture.componentRef.setInput('subheading', 'Visible');
    fixture.detectChanges();
    expect(el.querySelector('.section-title__sub')).not.toBeNull();

    fixture.componentRef.setInput('subheading', '');
    fixture.detectChanges();
    expect(el.querySelector('.section-title__sub')).toBeNull();
  });
});
