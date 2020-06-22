import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  constructor(private http: Http) {

   }
}
