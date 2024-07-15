import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'raianne-enviar-dados',
  templateUrl: './enviar-dados.component.html',
  styleUrls: ['./enviar-dados.component.scss']
})
export class EnviarDadosComponent {

  @Input() dados!: string;

  @Output() aoEnviarDados = new EventEmitter<string>();

  public enviarDados(): void {
    this.aoEnviarDados.emit("Voltou!");
  }

}
