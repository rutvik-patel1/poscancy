<template>
  <div class="mb-5">
    <v-row class="mt-2 ml-2">
      <v-col style="width: 500px">
        <v-select
          v-model="customElement"
          :items="items"
          outlined
          item-text="name"
          item-value="value"
          label="Select Input Field"
          dense
        ></v-select>
        <div v-if="customElement == 'radio'">
          {{ radioList }}

          <v-row>
            <v-col>
              <v-text-field dense outlined v-model="radioOption"></v-text-field>
            </v-col>
            <v-col>
              <v-btn @click="addRadioOption">Add</v-btn>
            </v-col>
          </v-row>
        </div>

        <div v-if="customElement == 'checkbox'">
          {{ checkboxList }}

          <v-row>
            <v-col>
              <v-text-field
                dense
                outlined
                placeholder="Enter Option"
                v-model="checkboxOption"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn @click="addCheckboxOption">Add</v-btn>
            </v-col>
          </v-row>
        </div>

        <div v-if="customElement == 'select'">
          {{ selectList }}

          <v-row>
            <v-col>
              <v-text-field
                dense
                outlined
                v-model="selectOption"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn @click="addSelectOption">Add</v-btn>
            </v-col>
          </v-row>
        </div>

        <v-text-field
          dense
          outlined
          v-model="fieldName.title"
          label="Title of field"
        ></v-text-field>

        <v-text-field
          dense
          outlined
          v-model="fieldName.description"
          label="Description of field"
        ></v-text-field>
        <v-select
          v-model="fieldName.type"
          :items="inputType"
          outlined
          item-text="name"
          item-value="value"
          label="Select Input Field"
          dense
        ></v-select>
        <v-btn color="primary" width="100%" @click="addField">Add Field</v-btn>
      </v-col>
      <v-col>
        <div class="text-h6">Form Field List</div>
        <div
          style="
            height: 210px;
            overflow: scroll;
            border: 1px solid gray;
            padding-left: 15px;
            margin-bottom: 30px;
          "
        >
          <ul>
            <li v-for="(item, i) in schema2" :key="i">
              {{ item.title }}
              <v-btn color="red" icon @click="deleteSchema(i)">
                <v-icon> mdi-delete </v-icon>
              </v-btn>
            </li>
          </ul>
        </div>
        <!-- <v-btn color="primary" width="100%" @click="showPreview()">Preview Form</v-btn> -->
        <v-row justify="center">
          <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark width="100%" v-bind="attrs" v-on="on">
                Preview Form
              </v-btn>
            </template>

            <v-card class="pa-2">
              <v-card-title>
                <span class="text-h5">Preview Form</span>
              </v-card-title>
              <v-container>
                <v-form ref="form" v-model="valid">
                  <v-jsf
                    v-model="model"
                    outlined
                    :schema="uchema"
                    @input="logEvent('input', $event)"
                    @change="logEvent('change', $event)"
                    @input-child="logEvent('input-child', $event)"
                    @change-child="logEvent('change-child', $event)"
                  />
                  <v-btn color="primary">Submit</v-btn>
                </v-form>
              </v-container>
            </v-card>
          </v-dialog>
        </v-row>
      </v-col>
    </v-row>
    

  </div>
</template>

<script>
import VJsf from "@koumoul/vjsf/lib/VJsf.js";
import "@koumoul/vjsf/lib/VJsf.css";
import "@koumoul/vjsf/lib/deps/third-party.js";

export default {
  components: {
    VJsf,
  },
  data() {
    return {
      dialog: false,
      valid: false,
      isPreview: false,
      model: {},
      customElement: "text",
      selectedItem: 0,
      items: [
        { name: "Input Field", value: "text" },
        { name: "Radio Group", value: "radio" },
        { name: "Select", value: "select" },
        { name: "Checkbox", value: "checkbox" },
        { name: "Textarea", value: "textarea" },
      ],
      inputType: [
        { name: "String", value: "string" },
        { name: "Integer", value: "integer" },
        { name: "Number", value: "number" },
      ],
      schema:{},
      SchemaObj: {
        type: "object",
        properties: this.schema2,
      },
      field: [],
      fieldName: {
        name: "",
        type: "string",
        description: "Enter firstname and lastname",
        title: "Enter fullname",
      },
      radioList: [],
      radioOption: "",
      selectOption: "",
      checkboxOption: "",
      selectList: [],
      checkboxList: [],
      trigger: 0,
    };
  },
  computed: {
    schema2() {
      return this.schema;
    },
    uchema() {
      return  {
        type: "object",
        properties: this.schema2,
      }
    }
  },
  methods: {
    showPreview(){
      this.isPreview = true
    },
    deleteSchema(id){
        this.$delete(this.schema2,id)
    },
    addField() {
      console.log("clicked");
      this.fieldName.name = Date.now();
      this.field.push(JSON.parse(JSON.stringify(this.fieldName)));
      let schemaObject = {
        type: this.fieldName.type,
        description: this.fieldName.description,
        title: this.fieldName.title,
        "x-props": {
          dense: true,
          outlined: true,
        },
      };
      if (this.customElement == "select") {
        schemaObject = {
          ...schemaObject,
          enum: this.selectList,
        };
      }
      if (this.customElement == "radio") {
        schemaObject = {
          ...schemaObject,
          enum: this.radioList,
          "x-display": "radio",
        };
      }
      if (this.customElement == "checkbox") {
        schemaObject = {
          ...schemaObject,
          type: "array",
          items: {
            type: "string",
            enum: this.checkboxList,
          },
          "x-display": "checkbox",
        };
      }
      if (this.customElement == "textarea") {
        schemaObject = {
          ...schemaObject,
          "x-display": "textarea",
        };
      }
      this.$set(
        this.schema,
        this.fieldName.name,
        JSON.parse(JSON.stringify(schemaObject))
      );
      this.fieldName.name = "";
      this.fieldName.type = "";
      this.fieldName.description = "";
      this.fieldName.title = "";
      this.customElement = "";
    },
    deleteFiled(id) {
      console.log(id);
      this.field.splice(id, 1);
    },
    addRadioOption() {
      this.radioList.push(this.radioOption);
      this.radioOption = "";
    },
    addCheckboxOption() {
      this.checkboxList.push(this.checkboxOption);
      this.checkboxOption = "";
    },
    addSelectOption() {
      this.selectList.push(this.selectOption);
      this.selectOption = "";
    },
  },
};
</script>


  


<style>
</style>