<template>
  <v-card class="ma-10">
    <v-row >
        <v-col >
            <div style="height:200px; width: 250px; margin:auto; margin-top: 25px;">
                <v-img contain src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/imagination_ok71.svg"></v-img>
            </div>
       </v-col>
    </v-row>
    <v-row >
        <v-col style="text-align:center;">
            <div style="font-size:65px;">404</div>
            <div>We can't find the page you're looking for!!</div>
        </v-col>
    </v-row>
    <v-row class="mt-2 mb-6">
        <v-col style="text-align:center;">
            <v-btn :to="{ name: 'newsfeed'  }" color="primary">Go To Home</v-btn>
        </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>