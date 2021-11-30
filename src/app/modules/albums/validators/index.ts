import { SongValidator, SongValidatorDirective } from "./song.validator";

const VALIDATORS = {
  song: SongValidator
};

const DIRECTIVES_VALIDATORS = [ SongValidatorDirective ];

export { VALIDATORS, DIRECTIVES_VALIDATORS };
