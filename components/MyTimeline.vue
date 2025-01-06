<template>
  <section>
    <ol class="timeline">
      <li v-for="{ title, detail, ts } of timelineItems" :key="title" class="timeline-item">
        <div class="timestamp" v-text="ts" />
        <div class="item-title" v-text="title" />
        <div class="item-detail" v-text="detail" />
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  data () {
    return {
      timelineItems: [
        {
          title: 'Delivery Advocate',
          detail: '',
          ts: 'September 2021',
        },
        {
          title: 'Self-educated',
          detail: '',
          ts: '2010',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  section {
    text-align: center;
  }

  .timeline{
    margin: 20px 0;
    padding: 0;
    display: inline-block;
  }
  .timeline li {
    list-style: none;
    margin: auto;
    margin-left: 200px;
    min-height: 50px;
    border-left: 1px dashed #f70;
    padding: 0 0 50px 30px;
    position: relative;
  }
  .timeline li:last-child { border-left:0; }
  .timeline li::before {
    position: absolute;
    left: -11px;
    top: 0;
    content: " ";
    // border: 8px solid rgba(255, 255, 255, 0.74);
    border-radius: 500%;
    background: #f70;
    height: 20px;
    width: 20px;
    transition: all 500ms ease-in-out;
  }
  .timeline li:hover::before {
    // border-color: #f70;
    background-color: hsl(0, 0%, 95%);

    box-shadow:
      0 0 0 3px hsl(204, 33%, 80%),
      0 0 0 6px hsl(204, 66%, 65%),
      0 0 0 9px hsl(204, 100%, 50%);
    transition: all 500ms ease-in-out;
  }
  .timeline li .item-title {
  }
  .timeline li .item-detail {
    font-size:12px;
  }
  .timeline li .timestamp {
    position: absolute;
    width: 100px;
    left: -50%;
    text-align: right;
    font-size: 12px;
  }
</style>
