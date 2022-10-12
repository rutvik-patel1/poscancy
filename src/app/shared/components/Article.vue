
<template>
  <v-card class="pa-6" :class="{
    'mx-1 my-3': $vuetify.breakpoint.smAndDown,
    'mx-5 my-8': $vuetify.breakpoint.mdAndUp,
  }">
    <v-row>
      <v-col cols="3" xl="2" lg="2" md="2" sm="3" xs="3">
        <div class="d-flex justify-center">
          <v-avatar :size="size" :class="{
            'ma-1 pa-0': $vuetify.breakpoint.smAndDown,
            'ma-0 pa-6': $vuetify.breakpoint.mdAndUp,
          }">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </div>
      </v-col>
      <v-col cols="9" xl="10" lg="10" md="10" sm="9" xs="9">
        <v-row class="mx-1">
          <v-textarea label="Write Something ..." outlined v-model="content" rows="3"></v-textarea>
        </v-row>

        <v-row class="ma-0">
          <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="6">
            <v-btn outlined color="primary" @click="chooseFile">
              <v-icon>mdi-image-outline</v-icon>{{ selectedFile?.name || 'PHOTO' }}
            </v-btn>
            <input ref="uploader" class="d-none" type="file" accept="image/*" @change="onFileChange" />
          </v-col>
          <v-col cols="6" xl="6" lg="6" md="6" sm="6" xs="6">
            <v-btn outlined color="primary" @click="chooseFile">
              <v-icon>mdi-video-outline</v-icon> Video
            </v-btn>
          </v-col>
          <v-col v-if="selectedFile">
            <v-btn depressed color="primary" @click="addPost">Post<v-icon class="material-icons ml-1">send</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { CreatePost } from '../../posts/shared/services/posts'
export default {
  name: "Article",
  data: () => ({
    size: 74,
    selectedFile: null,
    content: ''
  }),
  methods: {
    chooseFile() {
      this.$refs.uploader.click();
    },
    onFileChange(e) {
      this.selectedFile = e.target.files[0];
    },
     addPost() {
      const formData = new FormData();

     formData.append('media', this.selectedFile);
      const data = {
         "media": formData,
        "description": this.content
      }
       CreatePost(data).then((res) => {
        console.log(res.data);
        this.$store.dispatch('alert', {
          type: 'success', message: 'Post created successfully.'
        })
      });

      this.$router.push('/newsfeed');
    },
    onResize() {
      if (window.innerWidth > 1400) {
        this.size = 74;
      } else if (window.innerWidth <= 1400 && window.innerWidth > 1200) {
        this.size = 74;
      } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
        this.size = 68;
      } else if (window.innerWidth <= 992 && window.innerWidth > 768) {
        this.size = 60;
      } else if (window.innerWidth <= 768 && window.innerWidth > 576) {
        this.size = 52;
      } else if (window.innerWidth <= 576 && window.innerWidth > 460) {
        this.size = 48;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {}
</style>
