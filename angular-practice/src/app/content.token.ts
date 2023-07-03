import { InjectionToken } from '@angular/core';
import { Content } from './content.interface';

export const CONTENT = new InjectionToken<Content>('Content');
