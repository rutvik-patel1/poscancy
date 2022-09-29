import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#0A66C2', 
            secondary: '#FFCDD2', // #FFCDD2
            accent: '#3F51B5', // #3F51B5
            background:'#F8F9FA'
          },
          dark:{
            primary: '#0A66C2', 
            secondary: '#FFCDD2', // #FFCDD2
            accent: '#3F51B5', // #3F

          }
        },
      },
});
