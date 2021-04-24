<template>
  <li class="navbar-item">
    <a href="#" class="width-default" :class="{'width-auto': !isShow}">
      <div class="navbar-item-custom">
        <i :class="['navbar-item-icon', classIcon]"></i>
        <transition
          appear
          enter-active-class="animate__animated animate__fadeInLeft"
          leave-active-class="animate__animated animate__fadeOutLeft"
          mode="out-in"
        >
          <span v-if="isShow">{{ title }}</span>
        </transition>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    isShow: {
      type: Boolean,
      default: true
    },
    classIcon: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/common/variable";
.navbar-item {
  &-icon {
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 5px;
    text-decoration: none;
  }

  a {
    display: inline-block;
    font-size: 13px;
    text-decoration: none;
    color: $grey-color;
  }

  a:hover {
    background-color: $hover-menu-item-bg-color;
    color: $hover-menu-item-color;
  }

  a:focus {
    background-color: $default-color;
    color: $white-color;
  }

  &-custom {
    position: relative;
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 16px;
  }

  .icon-dashboard {
    background-image: url("../../assets/content/icon/dashboard.png");
  }

  .icon-report {
    background-image: url("../../assets/content/icon/report.png");
  }

  .icon-employee {
    background-image: url("../../assets/content/icon/dic-employee.png");
  }

  .icon-setting {
    background-image: url("../../assets/content/icon/setting.png");
  }
}

.width-default {
  width: 100%;
}

.width-auto {
 width: auto;
}
</style>
