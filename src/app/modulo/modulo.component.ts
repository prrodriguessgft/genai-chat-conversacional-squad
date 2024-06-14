import { Component } from '@angular/core';
import { ClientMockService } from '../clientes-mocados.service';

@Component({
  selector: 'app-modulo',
  template: `
    <ul>
      <li *ngFor="let c of client.clients">
        <p>Nome: <a href="clickName();">{{c.name}}</a> | Email: {{c.email}} | Admin: {{c.admin}} </p>
      </li>   
    </ul>
    <p>{{ modulos }}</p>
  `,
  styles: ``
})
export class ModuloComponent {
  readonly modulos: string[] = [
    'FAQ',
    'SEGURANÇA',
    'MODALIDADES DE NEGÓCIOS',
    'AUTOATENDIMENTO',
    'INSTITUCIONAL',
    'IT SUPORTE',
  ];

  constructor(readonly client: ClientMockService) {
    
  }
  ngOnInit(): void {
    
    function clickName(modules: object, clients: ClientMockService ) : void {
        // console.log( modules + ' ' + clients + '!');
        for (let i = 0; i < clients.clients.length;){
          // console.log(clients.clients[i].admin)
          i++;

          if(clients.clients[i].admin == true){
            console.log(clients.clients[i].admin)
            // console.log(modules)
            
            } else if (clients.clients[i].admin == false){
              // console.log(clients.clients[i].admin)
              console.log(modules)
          
          } else {
            console.log("Usuário não encontrado")
          }
        }
      }

      clickName(this.modulos, this.client);
      // console.log(clickName(this.modulos, this.client.clients));
  
    // Greet('Hello','Steve');//OK, returns "Hello Steve!"
    // console.log("tipo do modulos  " + typeof this.modulos);
    
    // for (let i = 0; i < this.client.clients.length;){
      // i++;
      
      // if(this.client.clients[i].admin == true){
      //   // console.log(this.client.clients[i]);
      //   // console.log('USUÁRIO ADMIN ------> ' + this.modulos)
        
      //   } else if (this.client.clients[i].admin == false){
      //   // console.log("tipo de dado   " + typeof this.client.clients[i]);
      //   // console.log('USUÁRIO NÃO ADMIN --- >' +  this.modulos[0] + ', ' +  this.modulos[1]);
        
      // } else {
      //   console.log("Usuário não encontrado")
      // }
    // };
  }
}
