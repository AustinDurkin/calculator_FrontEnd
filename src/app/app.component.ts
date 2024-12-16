import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculator_FrontEnd';
  display: string = "";

  appendInput(value: string): void {
    this.display += value;
  }
  clear(): void{
    this.display = "";

  }
  calculate(): void{
    try{
      this.display = eval(this.display)
    }
    catch (e) {
      this.display = "Erorr"
        }
  }
}
