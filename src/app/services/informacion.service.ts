import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info:any = {};
  cargada_info:boolean = false;
  cargada_sobre_nosotros:boolean = false;
  equipo:any[] = [];

  constructor( public http: Http ) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  /**
   * carga_info
   */
  public carga_info() {
    this.http.get('assets/data/info.pagina.json')
    .subscribe(data => {
      // console.log(data.json());
      this.cargada_info = true;
      this.info = data.json();
    });
  }

  /**
   * carga_sobre_nosotros
   */
  public carga_sobre_nosotros() {
    this.http.get('https://paginaweb-34085.firebaseio.com/equipo.json')
    .subscribe(data => {
      console.log(data.json());
      this.cargada_sobre_nosotros = true;
      this.equipo = data.json();
    });
  }

}
