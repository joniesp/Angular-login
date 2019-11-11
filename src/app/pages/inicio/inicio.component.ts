import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {

  users:any[] = []

  constructor(private _service:ServicesService) { }

  ngOnInit() {
    this._service.getUsers()
      .subscribe(res => {
        this.users = res['users']
      })
  }

}
