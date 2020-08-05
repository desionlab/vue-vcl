/**
 * tab-control.mixin.js
 *
 * @author    Desionlab <support@desionlab.net>
 * @copyright 2018 - 2020 Desionlab
 * @license   MIT
 */

import { v1 as uuid } from 'uuid';

export default {
  data() {
    return {
      tabList: [],
      tabOpen: null
    };
  },
  methods: {
    tabAdd(tab, show = true) {
      if (!tab.uuid) {
        tab.uuid = uuid();
      }

      for (let i = 0; i < this.tabList.length; i++) {
        const element = this.tabList[i];

        if (tab.uuid === element.uuid) {
          if (show) {
            this.tabOpen = i;
          }

          return;
        }
      }

      this.tabList.push(tab);

      if (show) {
        this.tabOpen = this.tabList.length - 1;
      }
    },
    tabShow(key) {
      this.tabOpen = key;
    },
    tabGet(key) {
      return this.tabList[key];
    },
    tabUpdate(key, tab) {
      this.tabList[key] = Object.assign(this.tabList[key], tab);
    },
    tabDelete(key) {
      this.$delete(this.tabList, key);

      if (!this.tabList.length) {
        this.tabOpen = null;
      } else {
        if (this.tabOpen === key) {
          if (key - 1 >= 0) {
            this.tabOpen = key - 1;
          } else {
            this.tabOpen = 0;
          }
        } else if (this.tabOpen > key) {
          if (this.tabOpen - 1 >= 0) {
            this.tabOpen = this.tabOpen - 1;
          } else {
            this.tabOpen = 0;
          }
        }
      }
    }
  }
};
