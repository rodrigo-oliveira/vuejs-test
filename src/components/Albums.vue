<template>
  <div class="panel panel-default">
    <h1 class="panel-heading">
      Data of: {{title}}
    </h1>
    <table-list :columns="tableColumns" :data="albums"/>
  </div>
</template>

<script>
import TableList from './TableList';

export default {
  name: 'albums',
  components: {
    TableList,
  },
  data() {
    return {
      title: 'Albums',
      tableColumns: [
        {
          name: 'Id',
          key: 'id',
        },
        {
          name: 'Título',
          key: 'title',
        },
      ],
      albums: [
        {
          id: 1,
          title: 'Album1',
        },
        {
          id: 2,
          title: 'Album2',
        },
      ],
    };
  },
};
</script>
