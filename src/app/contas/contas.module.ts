import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContasPage } from './contas.page';
import { RouteGuard } from '../route.guard';
import { SharedModule } from '../shared/shared.module';
import { ListaContasComponent } from './lista-contas/lista-contas.component';
import { ListaMovimentosComponent } from '../shared/lista-movimentos/lista-movimentos.component';

const routes: Routes = [
  {path: '', component: ContasPage, canActivate: [ RouteGuard ]},
  {path: 'inserir', loadChildren: './inserir-conta/inserir-conta.module#InserirContaPageModule', canLoad: [ RouteGuard ]},
  {path: 'editar/:id', loadChildren: './editar-conta/editar-conta.module#EditarContaPageModule', canLoad: [ RouteGuard ]}
];

@NgModule({
  entryComponents: [
    ListaMovimentosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ContasPage,
    ListaContasComponent
  ]
})
export class ContasPageModule {}
