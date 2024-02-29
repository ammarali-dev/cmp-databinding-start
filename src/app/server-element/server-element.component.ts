import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent implements OnInit {
  // @Input('serverElement') element: {
  //   type: string;
  //   name: string;
  //   content: string;
  // };

  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') contentParagraph: ElementRef;
  constructor() {
    console.log('Server Element Constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Server Element ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('Server Element ngOnInit');
  }
  ngDoCheck() {
    console.log('Server Element ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('Server Element ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Server Element ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('Server Element ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('Server Element ngAfterViewChecked');
    console.log(this.contentParagraph);
  }
  ngOnDestroy() {
    console.log('Server Element ngOnDestroyCalled');
  }
}
