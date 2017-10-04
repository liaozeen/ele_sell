<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      // 添加商品的数量
      addCart (event) {
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          // 为添加的good.food添加一个count属性，初始值为1
          Vue.set(this.food, 'count', 1);
        } else {
          // 若this.food已有count属性，其值在原基础上加1
          this.food.count++;
        }
        // 触发shopcart组件的drop事件
        this.$emit('add', event.target);
      },
      // 减少商品数量
      decreaseCart (event) {
        if (!event._constructed) {
          return;
        }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="stylus" type="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display:inline-block
      padding:6px
      opacity: 1
      transform: translate3d(0, 0, 0)
      .inner
        display:inline-block
        font-size:24px
        line-height:24px
        color:rgb(0,160,220)
        transition:all 0.4s linear
        transform:rotate(0)
      &.move-enter-active, &.move-leave-active
        transition: all 0.5s linear
      &.move-enter, &.move-leave-active
        opacity: 0
        transform: translate3d(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .cart-count
      display:inline-block
      vertical-align:top
      width:12px
      padding-top:6px
      line-height:24px
      text-align:center
      font-size:10px
      color:rgb(147,153,159)
    .cart-add
      display:inline-block
      padding:6px
      font-size:24px
      line-height:24px
      color:rgb(0,160,220)
</style>
