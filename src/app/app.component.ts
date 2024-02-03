import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FlexLayoutModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testjs';
  resultadoCep: any; // Declare a variável para o resultado do CEP
  // mostrarP = true;


  constructor() {
    // console.log(this.mostrarP);
    this.resultadoCep = null;

  }

  limitInput() {
    const inp1 = document.getElementById("inp1") as HTMLInputElement;
    const inp2 = document.getElementById("inp2") as HTMLInputElement;
    const inp3 = document.getElementById("inp3") as HTMLInputElement;
    const inp4 = document.getElementById("inp4") as HTMLInputElement;
    const inp5 = document.getElementById("inp5") as HTMLInputElement;
    const inp6 = document.getElementById("inp6") as HTMLInputElement;
    const inp7 = document.getElementById("inp7") as HTMLInputElement;
    const inp8 = document.getElementById("inp8") as HTMLInputElement;

    inp1.value = inp1.value.replace(/[^0-9]/g, '');
    inp2.value = inp2.value.replace(/[^0-9]/g, '');
    inp3.value = inp3.value.replace(/[^0-9]/g, '');
    inp4.value = inp4.value.replace(/[^0-9]/g, '');
    inp5.value = inp5.value.replace(/[^0-9]/g, '');
    inp6.value = inp6.value.replace(/[^0-9]/g, '');
    inp7.value = inp7.value.replace(/[^0-9]/g, '');
    inp8.value = inp8.value.replace(/[^0-9]/g, '');
  }

  resetInputs() {

    const inp1 = document.getElementById("inp1") as HTMLInputElement;
    const inp2 = document.getElementById("inp2") as HTMLInputElement;
    const inp3 = document.getElementById("inp3") as HTMLInputElement;
    const inp4 = document.getElementById("inp4") as HTMLInputElement;
    const inp5 = document.getElementById("inp5") as HTMLInputElement;
    const inp6 = document.getElementById("inp6") as HTMLInputElement;
    const inp7 = document.getElementById("inp7") as HTMLInputElement;
    const inp8 = document.getElementById("inp8") as HTMLInputElement;

    inp1.value = '';
    inp2.value = '';
    inp3.value = '';
    inp4.value = '';
    inp5.value = '';
    inp6.value = '';
    inp7.value = '';
    inp8.value = '';
    inp1.focus();

    if (inp1.value == '') {
      this.resultadoCep = null;
    }
  }

  async NextInput() {

    const inp1 = document.getElementById("inp1") as HTMLInputElement;
    const inp2 = document.getElementById("inp2") as HTMLInputElement;
    const inp3 = document.getElementById("inp3") as HTMLInputElement;
    const inp4 = document.getElementById("inp4") as HTMLInputElement;
    const inp5 = document.getElementById("inp5") as HTMLInputElement;
    const inp6 = document.getElementById("inp6") as HTMLInputElement;
    const inp7 = document.getElementById("inp7") as HTMLInputElement;
    const inp8 = document.getElementById("inp8") as HTMLInputElement;

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Backspace') {
        inp1.value = '';
        inp2.value = '';
        inp3.value = '';
        inp4.value = '';
        inp5.value = '';
        inp6.value = '';
        inp7.value = '';
        inp8.value = '';
        inp1.focus();
      } else if (document.activeElement === inp1 && inp1.value != '') {
        inp2.focus();
      } else if (document.activeElement === inp2 && inp2.value != '') {
        inp3.focus();
      } else if (document.activeElement === inp3 && inp3.value != '') {
        inp4.focus();
      } else if (document.activeElement === inp4 && inp4.value != '') {
        inp5.focus();
      } else if (document.activeElement === inp5 && inp5.value != '') {
        inp6.focus();
      } else if (document.activeElement === inp6 && inp6.value != '') {
        inp7.focus();
      } else if (document.activeElement === inp7 && inp7.value != '') {
        inp8.focus();
      }
    });

    if (inp1.value == '') {
      this.resultadoCep = null;
    }
  }

  async BuscarCep(resultadoCep: any) {
    const inp1 = document.getElementById("inp1") as HTMLInputElement;
    const inp2 = document.getElementById("inp2") as HTMLInputElement;
    const inp3 = document.getElementById("inp3") as HTMLInputElement;
    const inp4 = document.getElementById("inp4") as HTMLInputElement;
    const inp5 = document.getElementById("inp5") as HTMLInputElement;
    const inp6 = document.getElementById("inp6") as HTMLInputElement;
    const inp7 = document.getElementById("inp7") as HTMLInputElement;
    const inp8 = document.getElementById("inp8") as HTMLInputElement;

    const cepValue = inp1.value + inp2.value + inp3.value + inp4.value + inp5.value + inp6.value + inp7.value + inp8.value;
    const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
    const data = await response.json();
    this.resultadoCep = data; // Atribua o resultado do CEP à variável

  }

}



