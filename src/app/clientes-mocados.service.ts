import { Injectable } from '@angular/core';

export interface Client {
  name: string;
  email: string;
  admin: boolean;
}

@Injectable({providedIn: 'root'})
export class ClientMockService {
  clients: Client[] = [
    {
      name: 'João Sistem',
      email: 'joao.sistem@gmail.com',
      admin: false
    },
    {
      name: 'Wakin',
      email: 'Wakin.sistem@gmail.com',
      admin: true
    },
    {
      name: 'Sinyo',
      email: 'Sinyo.sistem@gmail.com',
      admin: false
    },
    {
      name: 'Xuwo',
      email: 'Xuwo.sistem@gmail.com',
      admin: true
    },
    {
      name: 'Bubea',
      email: 'Bubea.sistem@gmail.com',
      admin: false
    },
    {
      name: 'Vesye',
      email: 'Vesye.sistem@gmail.com',
      admin: true
    },
    {
      name: 'Sanodimu',
      email: 'Sanodimu.sistem@gmail.com',
      admin: false
    },
    {
      name: 'Elryo',
      email: 'Elryo.sistem@gmail.com',
      admin: true
    },
    {
      name: 'Gaaer',
      email: 'Gaaer.sistem@gmail.com',
      admin: false
    },
    {
      name: 'Mioss',
      email: 'Mioss.sistem@gmail.com',
      admin: true
    },
  ]
}
