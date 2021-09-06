import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];


  constructor(private http: HttpClient) {

    this.cargarProductos();

  }

  private cargarProductos() {
    this.http.get('https://angular-html-b4c4b-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto) => {

        console.log(resp);
        this.productos = this.productos.concat(resp);
        this.cargando = false;
      });

 

  }


}


