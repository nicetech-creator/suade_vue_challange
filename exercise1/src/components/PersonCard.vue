<template>
  <div class="person-card" @click="$emit('personClick', person)">
    <h4> {{ person.name }} </h4>
    <b>Age:</b> {{ person.age }} <br/>
    <b>Eye Color:</b> {{ person.eyeColour }} <br/>
    <b>Gender:</b> {{ person.gender }} <br/>
  </div>
</template>

<script>
  export default {
    name: 'PersonCard',
    props: {
      person: {
        type: Object,
        default: () => ({}),
      },
    },
    emits: ['personClick'],
  };
</script>

<style scoped>

</style>
