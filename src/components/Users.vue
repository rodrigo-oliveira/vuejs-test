<template>
  <div class="panel panel-default">
    <h1 class="panel-heading">
      Data of: {{title}}
    </h1>
    <table-list :columns="tableColumns" :data="users" />
    <li v-for="cervejaria in cervejarias">{{cervejaria.name}}</li>
  </div>
</template>

<script>
import TableList from './TableList';

export default {
  name: 'users',
  components: {
    TableList,
  },
  data() {
    return {
      title: 'Users',
      tableColumns: [
        {
          name: 'Id',
          key: 'id',
        },
        {
          name: 'Name',
          key: 'name',
        },
      ],
      users: [
        {
          id: 1,
          name: 'Rodrigo Souza',
        },
        {
          id: 2,
          name: 'Raul Seixas',
        },
      ],
      cervejarias: [],
    };
  },
  mounted() {
    this.$http.get('https://gist.githubusercontent.com/vedovelli/3a83755e576778088c93/raw/204ced0602760829597f5caa2680e5f7cb29bade/cervejarias.json').then((res) => {
      this.$set('cervejarias', res.json());
    });
  },
};
</script>
