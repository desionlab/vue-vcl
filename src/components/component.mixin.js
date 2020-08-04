/**
 * component.mixin.js
 *
 * @author    Desionlab <support@desionlab.net>
 * @copyright 2018 - 2020 Desionlab
 * @license   MIT
 */

import { v1 as uuid } from 'uuid';

export default {
  props: {
    /* Unique identificator. */
    id: {
      type: String,
      default() {
        return uuid();
      }
    }
  }
};
