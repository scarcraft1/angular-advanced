import { AddItemComponent } from "./add-item/add-item.component";
import { AlbumsFilterComponent } from "./filter/filter.component";
import { ListItemComponent } from "./list-item/list-item.component";

const COMPONENTS = [ListItemComponent, AddItemComponent, AlbumsFilterComponent];

export * from './controls';
export { COMPONENTS, ListItemComponent, AlbumsFilterComponent };

