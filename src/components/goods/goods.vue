<template>
  <div>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex === index}" @click="selectMenu(index, $event)">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook" ref="foodList">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li @click="selectFood(food,$event)"  v-for="food in item.foods" class="food-item border-1px">
              <div class="icon">
                <img width="57" height="57"  :src="food.icon">
              </div>
              <div class="content" >
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}</span><span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                 <cartcontrol  @add="addFood" :food="food"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart ref="shopcart" :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
  </div>
  <food :food="selectedFood" ref="food"></food>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import shopcart from '../../components/shopcart/shopcart';
  import cartcontrol from '../../components/cartcontrol/cartcontrol';
  import food from '../../components/food/food';
  import { isGithub } from '../../common/js/util';

  const ERR_OK = 0;

  export default {
    props: {
        seller: {
          type: Object
        }
    },
    data () {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {}
      };
    },
    computed: {
      // 判断滚条当前所在的区块，并返回对应区块的索引
      currentIndex () {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      },
      // 遍历所有商品，筛选出已被选择的商品以及商品的数量
      selectFoods () {
        let foods = [];
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            // 若food.count>0,说明此商品已被选择，则添加到foods中
            if (food.count) {
              foods.push(food);
            }
          });
        });
        return foods;
      }
    },
    created () {
      // classMap用于根据不同参数给元素的class添加不同属性
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

      // 判断当前项目运行的环境是GitHub还是本地dev，然后访问特定的api地址获取数据
      if (isGithub()) {
            let prodPath = 'https://liaozeen.github.io/ele_sell' + '/api/data.json';
            this.$http.get(prodPath).then(response => {
                response = response.body;
                this.goods = response.goods;
                // $nextTick()api可以让命令延迟到DOM变化后再执行
                this.$nextTick(() => {
                    this._initScroll();
                    this._calculateHeight();
                });
            });
        } else {
          this.$http.get('/api/goods').then((response) => {
            response = response.body;
            if (response.errno === ERR_OK) {
              this.goods = response.data;
                this.$nextTick(() => {
                  this._initScroll();
                  this._calculateHeight();
                });
            }
          });
        }
    },
    methods: {
      // 点击左侧菜单列表，右侧列表滚动到指定区块
      selectMenu (index, event) {
        // 去掉自带的click事件点击，即pc端直接返回
        if (!event._constructed) {
          return;
        }
        let foodList = this.$refs.foodList;
        let el = foodList[index];
        // better-srcoll的api，类似jump to的功能,通过这个方法,跳转到指定的dom
        this.foodsScroll.scrollToElement(el, 300);
      },
      selectFood (food, event) {
        if (!event._constructed) {
          return;
        }
        this.selectedFood = food;
        // 调用当前商品的show()方法，显示当前商品的详情页
        this.$refs.food.show();
      },
      // 当购物添加按钮被点击时，调用_drop()方法
      addFood (target) {
        this._drop(target);
      },
      _drop (target) {
        // 体验优化,异步执行下落动画
        this.$nextTick(() => {
          // 调用shopcart的drop方法
          this.$refs.shopcart.drop(target);
        });
      },
      // 初始化滚动条
      _initScroll () {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true // 结合BScroll的接口使用,是否将click事件传递,默认被拦截了
        });

        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          probeType: 3  // 结合BScroll的接口使用,3实时派发scroll事件，探针的作用
        });
        // 监听scroll事件(实时派发的),并获取鼠标坐标，当滚动时能实时暴露出scroll
        this.foodsScroll.on('scroll', (pos) => {
            // 处理pos的y坐标的值，使得成为正整数
            this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      // 计算每个food区块的高度
      _calculateHeight () {
        // 获取每个food列表的DOM对象
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
        let height = 0; // 初始化第一个高度为0
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i]; // 每一个item都是刚才获取的food的每一个dom
          height += item.clientHeight; // 主要是为了获取每一个foods内部块的高度
          this.listHeight.push(height);
        }
      }
    },
    components: {
      shopcart,
      cartcontrol,
      food
    }
  };
</script>

<style lang="stylus" type="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .goods
    display:flex
    position: absolute
    top:174px
    bottom:46px
    width:100%
    overflow:hidden
    .menu-wrapper
      flex:0 0 80px
      background:#f3f5f7
      .menu-item
        display:table
        height:54px
        width:56px
        padding:0 12px
        line-height:14px
        &.current
          position:relative
          z-index:10
          margin-top: -1px
          background: #fff
          font-weight:700
          .text
            border-none()
        .icon
          display:inline-block
          vertical-align: top
          width:12px
          height: 12px
          margin-right:2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
           bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display:table-cell
          width:56px
          vertical-align:middle
          border-1px(rgba(7,17,27,0.1))
          font-size:12px
    .foods-wrapper
      flex:1
      .title
        padding-left:14px
        height:26px
        border-left:2px solid #d9dde1
        background:#f3f5f7
        font-size:12px
        color:rgb(147,153,159)
        line-height:26px
      .food-item
        display:flex
        margin:18px
        padding-bottom:18px
        border-1px(rgba(7,17,27,0.1))
        &:last-child
         border-none()
         margin-bottom:0
        .icon
          flex:0 0 57px
          margin-right:10px
        .content
          flex:1
          .name
            margin:2px 0 8px 0
            height:14px
            font-size:14px
            color:rgb(7,17,27)
            line-height:14px
          .desc, .extra
            font-size:10px
            color:rgb(147,153,159)
            line-height:10px
          .desc
            line-height:12px
            margin-bottom:8px
          .extra
            .count
              margin-right:12px
          .price
            line-height:24px
            font-weight:700
            .now
              font-size:14px
              color:rgb(240,20,20)
              margin-right:8px
            .old
              text-decoration:line-through
              font-size:10px
              color:rgb(147,153,159)
          .cartcontrol
            position:absolute
            right:0
            bottom:12px
</style>
