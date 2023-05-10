import { Component } from '@angular/core';

@Component({
  selector: 'app-awesome',
  templateUrl: './awesome.component.html',
  styleUrls: ['./awesome.component.css'],
})
export class AwesomeComponent {
  randomIcon: any;
  showIcon: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showRandomIcon() {
    this.randomIcon = 'fas fa-' + this.getRandomIcon();
    this.showIcon = true;

    setTimeout(() => (this.showIcon = false), 3000);
  }

  getRandomIcon() {
    const icons: string[] = ['coffee', 'heart', 'star', 'smile', 'thumbs-up'];

    return icons[Math.floor(Math.random() * icons.length)];
  }
}
