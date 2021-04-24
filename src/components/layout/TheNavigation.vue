<template>
  <div class="navigation">
    <div class="page-description">
      <span>Hiển thị 1-10/1000 Khách hàng</span>
    </div>
    <div class="pagination">
      <div class="pagination-icon pagination-icon-left">
        <i class="fas fa-angle-double-left"></i>
        <i class="fas fa-angle-left"></i>
      </div>
      <div class="pagination-number-page">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
      <div class="pagination-icon pagination-icon-right">
        <i class="fas fa-angle-right"></i>
        <i class="fas fa-angle-double-right"></i>
      </div>
    </div>
    <div class="page-description">
      <span>10 khách hàng/Trang</span>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/common/_variable.scss";
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 10px 20px;

  .page-description {
    font-size: 14px;
  }

  .pagination {
    display: flex;
    align-items: center;

    &-icon {
      font-size: 20px;
      color: $navigation-icon-color;

      &-left {
        margin-right: 20px;
      }

      &-right {
        margin-left: 20px;
      }

      &-left, &-right {
        i:first-child {
          margin-right: 20px;
        }
      }

      i {
        cursor: pointer;
      }

      i:hover {
        color: $navigation-icon-hover-color
      }
    }

    &-number-page {
      span {
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;
        background-color: $number-page-btn-bg-color;
        color: $white-color;
        margin-right: 15px;
        cursor: pointer;
        outline: none;
      }

      span:last-child {
        margin-right: 0;
      }

      span:hover, span:focus {
        background-color: $number-page-btn-bg-hover-color;
      }
    }
  }
}
</style>
