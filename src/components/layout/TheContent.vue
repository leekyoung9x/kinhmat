<template>
  <div class="content">
    <div class="content-top">
      <h2 class="title">Danh sách sản phẩm</h2>
      <button-option bgColor="#019160" hoverBgColor="#2FBE8E" color="#fff" hoverColor="#fff" @click.native="isShowPopoverAdd = true">
        <i class="fas fa-user-plus" style="margin-right: 5px;"></i>
        Thêm sản phẩm
      </button-option>
    </div>
    <div class="tools">
      <div class="search">
        <i class="fas fa-search"></i>
        <input v-model="search" type="text" placeholder="Tìm kiếm theo Mã, Tên SP" />
        <i class="fas fa-times-circle search-remove" v-if="search" @click="search = ''"></i>
      </div>

      <div class="btn-refresh">
        <a>
          <i class="fas fa-sync-alt"></i>
        </a>
      </div>
    </div>

    <div class="user-list scrollbar">
      <table class="user-list-table">
        <thead>
          <tr>
            <th>Chọn</th>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>NCC</th>
            <th>Số lượng</th>
            <th>Màu sắc</th>
            <th>Chất liệu</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox">
            </td>
            <td>January</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>$100</td>
            <td>
              <status styles="background-color: yellow; color: gray">
                <span>Chưa duyệt</span>
              </status>
            </td>
            <td style="display: flex">
              <button-option color="gray" hoverColor="#fff" bgColor="#ebebeb" hoverBgColor="#2280ac" style="margin-right: 10px;" @click.native="isShowPopoverEdit = true">
                <span>Sửa</span>
              </button-option>
              <button-option color="#fff" hoverColor="#fff" bgColor="#F65454" hoverBgColor="red" @click.native="isShowDeleteMessage = true">
                <span>Xóa</span>
              </button-option>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <popover-edit :isShow="isShowPopoverEdit" :onHidden="HiddenPopoverEdit"></popover-edit>
    <popover-add :isShow="isShowPopoverAdd" :onHidden="HiddenPopoverAdd"></popover-add>
    <popup-warning title="Xóa khách hàng" detail="Bạn chắc chắn muốn xóa khách hàng này chứ ?" classIcon="fas fa-exclamation-circle warning-color" :isShow="isShowDeleteMessage" :onHidden="HiddenPopupDeleteMessage">
      <button-option bgColor="#da221c" hoverBgColor="#FF4747" color="#fff" hoverColor="#fff" @click.native="HiddenPopupDeleteMessage">
        <span>Xóa</span>
      </button-option>
      <button-option style="margin-right: 10px;" bgColor="#ebebeb" hoverBgColor="gray" hoverColor="#fff" @click.native="HiddenPopupDeleteMessage">
        <span>Đóng</span>
      </button-option>
  </popup-warning>
  </div>
</template>

<script>
import ButtonOption from '../common/Button'
import Status from '../common/Status'
import PopoverEdit from '../pages/user/PopoverEdit'
import PopupWarning from '../common/PopupWarning'
import PopoverAdd from '../pages/user/PopoverAdd.vue'

export default
{
  data () {
    return {
      search: '',
      isShowPopoverEdit: false,
      isShowPopoverAdd: false,
      isShowDeleteMessage: false
    }
  },
  components: {
    Status,
    ButtonOption,
    PopoverEdit,
    PopupWarning,
    PopoverAdd
  },
  methods: {
    HiddenPopoverAdd () {
      this.isShowPopoverAdd = false
    },
    HiddenPopoverEdit () {
      this.isShowPopoverEdit = false
    },
    HiddenPopupDeleteMessage () {
      this.isShowDeleteMessage = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/common/_variable.scss";
.content {
  padding: 12px 10px 0 10px;
  &-top {
    display: flex;
    justify-content: space-between;

    .title {
      font-size: 16px;
      font-weight: bold;
    }

    .btn-add {
      background-color: $default-color;
      border-radius: 4px;
      height: 40px;
      line-height: 20px;
      font-size: 13px;
      color: $white-color;
      font-weight: normal;
      padding: 10px 16px;
      text-decoration: none;

      i {
        margin-right: 5px;
      }
    }
  }

  .tools {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 10px;
    .search {
      border: 1px solid $border-color;
      border-radius: 4px;
      width: 230px;
      height: 40px;
      padding: 16px 0 16px 16px;
      display: flex;
      align-items: center;

      &-remove {
        color: $cancel-btn-color;
        cursor: pointer;

        &:hover {
          color: $cancel-btn-hover-color;
        }
      }
      i {
        margin-right: 8px;
        font-size: 16px;
      }
      input {
        padding: 0;
        border: 0px;
        outline: none;
        width: 80%;
        font-size: 12px;
        font-weight: normal;
        font-style: italic;
      }
    }

    .btn-refresh {
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 50px;
        border-radius: 4px;
        border: 1px solid $border-color;
        cursor: pointer;
      }
    }
  }
  .user-list {
    min-height: 60vh;
    &-table {
      width: 100%;
      text-align: left;
      thead,
      tbody {
        tr {
          border-bottom: 2px solid $table-cell-hover-color;

          th,
          td {
            padding: 10px 10px;
          }
        }
      }

      thead {
        th {
          font-size: 15px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
