<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th v-for="col in columns">{{col.name}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data">
        <td v-for="col in columns">{{methods.getRow(item, col.key)}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableList',
  data() {
    return {
      methods: {
        getRow(item, key) {
          const keySplit = key.split('.');

          return (keySplit.length > 1) ? item[keySplit[0]][keySplit[1]] : item[key];
        },
      },
    };
  },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
