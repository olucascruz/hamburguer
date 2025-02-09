import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})

export class ItemMenuComponent {
  @Input() title: string = '';
  @Input() ingredients: string = '';
  @Input() srcImg: string = '';
}
