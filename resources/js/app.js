require('./bootstrap');
window.Vue = require('vue');

Vue.component('header-menubar', require('./vue/HeaderMenu').default);
Vue.component('header-search', require('./vue/HeaderSearch').default);
Vue.component('scroll-slider', require('./vue/ScrollSlider').default);
Vue.component('special-zone', require('./vue/SpecialZone').default);
Vue.component('blog-section', require('./vue/BlogSection').default);
Vue.component('join-section', require('./vue/JoinSection').default);
Vue.component('about-us', require('./vue/AboutUs').default);
Vue.component('suggested-place', require('./vue/SuggestedPlace').default);
Vue.component('footer-firstpage', require('./vue/FooterFirstpage').default);




const app = new Vue({
    el: '#app',
    methods: {

    },
});
