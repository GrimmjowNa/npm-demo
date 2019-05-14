import NIcon from './src/icon.vue';

/* istanbul ignore next */
NIcon.install = function(Vue) {
  Vue.component(NIcon.name, NIcon);
};

export default NIcon;
