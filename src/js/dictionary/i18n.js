import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

import { roRO } from "./ro-RO";
import { enUK } from "./en-UK";

export const i18n = new VueI18n({
  locale: "en-UK",
  messages: {
    "ro-RO": roRO,
    "en-UK": enUK
  }
});
