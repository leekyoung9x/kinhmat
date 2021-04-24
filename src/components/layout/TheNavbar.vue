<template>
  <div :class="['navbar', {'resize-width': !isShow}]">
    <div :class="['logo-toggle', {'logo-toggle-custom': !isShow}]">
      <div class="toggle" @click="isShow = !isShow"></div>
      <div class="logo" v-if="isShow"></div>
    </div>
    <div class="navbar-list">
      <ul>
          <navbar-item
            title="Tổng quan"
            :isShow="isShow"
            classIcon="fas fa-tachometer-alt"
          ></navbar-item>

        <navbar-item
          title="Báo cáo"
          :isShow="isShow"
          classIcon="far fa-chart-bar"
        ></navbar-item>
        <navbar-item
          title="Mua hàng"
          :isShow="isShow"
          classIcon="fas fa-shopping-cart"
        ></navbar-item>
        <navbar-item
          title="Danh mục khách hàng"
          :isShow="isShow"
          classIcon="fas fa-users"
        ></navbar-item>
        <navbar-item
          title="Thiết lập hệ thống"
          :isShow="isShow"
          classIcon="fas fa-cog"
        ></navbar-item>
      </ul>
    </div>
  </div>

</template>

<script>
import NavbarItem from '../common/NavbarItem.vue'
export default {
  components: { NavbarItem },
  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/common/variable";
.navbar {
  width: 226px;
  height: 100vh;
  border-right: 2px solid $table-cell-color;
}
.logo-toggle {
  display: flex;
  justify-content: space-between;
  padding: 12px 32px 12px 16px;

  &-custom {
    padding: 12px 0px 12px 16px;
    .toggle {
      margin-right: 0;
    }
  }

  .toggle {
    width: 24px;
    height: 24px;
    background-image: url("../../assets/content/img/toggle.png");
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 10px;

  }

  .logo {
    width: calc(100% - 34px);
    height: 24px;
    background-image: url("../../assets/content/img/logo.jpg");
    background-repeat: no-repeat;
    background-size: contain;
  }
}

.resize-width {
  width: auto;
}
</style>
