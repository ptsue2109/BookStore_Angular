import { NgModule } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { EditorModule } from 'primeng/editor';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { MenubarModule } from 'primeng/menubar';
import { ScrollTopModule } from 'primeng/scrolltop';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { TieredMenuModule } from 'primeng/tieredmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
const PrimeComponent = [
  PasswordModule,
  DividerModule,
  EditorModule,
  ToolbarModule,
  RippleModule,
  TableModule,
  ButtonModule,
  BadgeModule,
  CarouselModule,
  ImageModule,
  MenubarModule,
  GalleriaModule,
  TieredMenuModule,
  ScrollTopModule,
  InputTextModule,
  MessagesModule,
  MessageModule,
  ToastModule,
  AvatarModule,
  TagModule,
  CardModule,
  BreadcrumbModule
];

@NgModule({
  exports: [PrimeComponent],
})
export class PrimeModule {}