import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-toaster',
  template: `
    <p>
      toaster works!
    </p>
  `,
  styles: [
  ]
})
export class ToasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
