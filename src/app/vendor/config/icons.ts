import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faCopy,
  faExclamationTriangle,
  faFile,
  faFileDownload,
  faInfoCircle,
  faList,
  faMinusCircle,
  faPlus,
  faPlusCircle,
  faQuestionCircle,
  faReply,
  faSave,
  faSearch,
  faSpinner,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

export function AddIcons(library: FaIconLibrary) {
  library.addIcons(faSave);
  library.addIcons(faPlus);
  library.addIcons(faReply);
  library.addIcons(faList);
  library.addIcons(faTrash);
  library.addIcons(faFile);
  library.addIcons(faSpinner);
  library.addIcons(faSearch);
  library.addIcons(faCopy);
  library.addIcons(faInfoCircle);
  library.addIcons(faPlusCircle);
  library.addIcons(faMinusCircle);
  library.addIcons(faFileDownload);
  library.addIcons(faQuestionCircle);
  library.addIcons(faChevronCircleLeft);
  library.addIcons(faChevronCircleRight);
  library.addIcons(faExclamationTriangle);
}
