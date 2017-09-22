<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wraper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wraper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingselect :select-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="ratings" ></ratingselect>
      <div class="rating-wrapper">
        <ul>
          <li v-for="rating in ratings" class="raing-item">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating.delivery">{{rating.deliveryTme}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend" v-show="rating.recommend  && rating.recommend.length">
                <span class="icon-thumb_up"></span>
                <span v-for="item in rating.recommend">{{item}}</span>
              </div>
              <div class="time">{{rating.rateTime | formatDate}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import star from '../star/star';
  import split from '../../components/split/split';
  import ratingselect from '../../components/ratingselect/ratingselect';
  import {formatDate} from '../../common/js/date';

  const ALL = 2;
  const ERR_OK = 0;

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        ratings: [],
        selectType: ALL,
        onlyContent: true
      };
    },
    created () {
      this.$http.get('/api/ratings').then((response) => {
        response = response.body;
        if (response.erron === ERR_OK) {
          this.ratings = response.data;
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.ratings, {
              click: true
            });
          });
        }
      });
    },
    filters: {
      formatDate (time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    },
    components: {
      star,
      split,
      ratingselect
    }
  };
</script>

<style lang="stylus" type="stylesheet/stylus">
  .ratings
    position:absolute
    top:174px
    bottom:0
    left:0
    width:100%
    overflow:hidden
    .overview
      display:flex
      padding:18px 0
      .overview-left
        flex:0 0 137px
        padding:6px 0
        width:137px
        border-right:1px solid rgb(7,17,27,0.1)
        text-align:center
        @media only screen and (max-width: 320px)
          flex:0 0 120px
          width:120px
        .score
          margin-bottom:6px
          font-size:24px
          line-height:28px
          color:rgb(255,153,0)
        .title
          margin-bottom:8px
          font-size:12px
          line-height:12px
          color:rgb(7,17,27)
        .rank
          font-size:10px
          line-height:10px
          color:rgb(147,153,159)
      .overview-right
        flex:1
        padding:6px 0 6px 24px
        @media only screen and (max-width: 320px)
          padding-left:6px
        .score-wraper
          margin-bottom:8px
          font-size:0
          .title
            display:inline-block
            line-height:18px
            vertical-align:top
            font-size:12px
            color:rgb(7,17,27)
          .star
            display:inline-block
            margin:0 12px
            vertical-align:top
          .score
            display:inline-block
            vertical-align:top
            font-size:12px
            line-height:18px
            color:rgb(255,153,0)
        .delivery-wrapper
          font-size:0
          .title
            line-height:18px
            font-size:12px
            color:rgb(7,17,27)
          .delivery
            margin-left:12px
            font-size:12px
            color:rgb(147,153,159)
</style>
