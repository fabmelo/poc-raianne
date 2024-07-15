import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dados!: string;
  voltou!: string;

  public enviarDados(): void {
    this.dados = "Indo!";
  }

  public receberDados(event: string): void {
    this.dados = event;
  }

}
