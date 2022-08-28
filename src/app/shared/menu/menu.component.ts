import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() user!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
