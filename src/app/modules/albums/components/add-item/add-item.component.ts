import { ChangeDetectionStrategy, Component, EventEmitter, Output } from "@angular/core";
import { Album } from "../../models";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styles: [':host { display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddItemComponent {
  private readonly EMPTY: Album = {
    id: 0,
    userId: 0,
    songs: [],
    title: ''
  };

  public album: Album = { ...this.EMPTY };

  @Output()
  public albumCreated = new EventEmitter<Album>();

  public create() {
    this.albumCreated.emit(this.album);
    this.album = { ...this.EMPTY };
  }
}
