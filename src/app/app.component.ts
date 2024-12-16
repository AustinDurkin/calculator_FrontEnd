import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator_FrontEnd';
  display: string = "";

  constructor(private http: HttpClient) {}
  
  appendInput(value: string): void {
    this.display += value;
  }
  clear(): void {
    this.display = "";
  }
  calculate(): void {
    const operatorRegex = /([\+\-\*\/])/;
    const parts = this.display.split(operatorRegex);

    if (parts.length === 3) {
      const number1 = parseFloat(parts[0]);
      const operator = parts[1];
      const number2 = parseFloat(parts[2]);

      let endpoint = '';
      switch (operator) {
        case '+':
          endpoint = '/calculator/add';
          break;
        case '-':
          endpoint = '/calculator/subtract';
          break;
        case '*':
          endpoint = '/calculator/multiply';
          break;
        case '/':
          endpoint = '/calculator/divide';
          break;
        default:
          this.display = "Error";
          return;
      }

      this.http.post<any>(`http://localhost:8080${endpoint}`, { number1, number2 })
        .subscribe({
          next: (response) => {
            this.display = response.result.toString();
          },
          error: () => {
            this.display = "Error";
          }
        });
    } else {
      this.display = "Error";
    }
  }
}
