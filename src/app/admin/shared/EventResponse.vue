<template>
  <v-container>
    <v-card class="ma-4 pa-3">
      <div>
        <h2 class="">{{ title }}</h2>
        <p>
          {{ desc }}
        </p>
      </div>
      <v-divider></v-divider>
      <v-card outlined>
        <v-data-table
          :headers="headers"
          :items="data"
          :items-per-page="10"
        ></v-data-table>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eosexplicabo, illum architecto deserunt perferendis sint maiores, repudiandae tenetur quae fugiat est nisi aperiam, velit accusantium odit ipsa eaque quam officia!",
      title: "Goa Trip",
      headers: [
        {
          text: "Fullname",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Email", value: "email" },
        { text: "Gender", value: "gender" },
        { text: "DOB", value: "dob" },
        { text: "Mobile No", value: "number" },
        { text: "isMarried", value: "married" },
      ],
      data: [
        {
          name: "Rutvik Patel",
          email: "rutvik@gmail.com",
          gender: "M",
          dob: "18/01/2001",
          number: 9099072492,
          married: false,
        },
        {
          name: "Rutvik Patel",
          email: "rutvik@gmail.com",
          gender: "M",
          dob: "18/01/2001",
          number: 9099072492,
          married: false,
        },
        {
          name: "Rutvik Patel",
          email: "rutvik@gmail.com",
          gender: "M",
          dob: "18/01/2001",
          number: 9099072492,
          married: false,
        },
        {
          name: "Rutvik Patel",
          email: "rutvik@gmail.com",
          gender: "M",
          dob: "18/01/2001",
          number: 9099072492,
          married: false,
        },
      ],
    };
  },
};
</script>
<style>
</style>