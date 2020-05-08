import { withPluginApi } from "discourse/lib/plugin-api";
import { iconHTML } from "discourse-common/lib/icon-library";

export default {
  name: "test-js-plugin-init",

  initialize() {
    withPluginApi("0.8", api => {
      console.log('I initialized properly!');
    });
  }
};
