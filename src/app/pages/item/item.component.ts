import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/productocompleto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto!: ProductoDescripcion;
  id!: String;

  constructor(private route: ActivatedRoute,
    public productoService: ProductosService) { }

  ngOnInit(): void {

    this.route.params.
      subscribe(parametros => {

        this.productoService.getProducto(parametros['id']).
          subscribe( (producto: ProductoDescripcion) => {
            this.id = parametros['id'];
            this.producto = producto;

          });
      });
  }

}
