import { Component, Input } from "@angular/core";
import { UsuariosService } from "../../services";

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styles: [':host { display: block; }']
})
export class UserListItemComponent {
  @Input() user?: any;

  constructor(private service: UsuariosService) { }

  editUser(id: number) {
    this.service.editUser(id, { id, name: `${Math.random() * 1000}`, email: ''});
  }
}
