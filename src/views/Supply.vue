<template>
  <div>
    <the-content>
      <div class="content-top">
        <h2 class="title">Danh sách nhà cung cấp</h2>
        <button-option
          bgColor="#019160"
          hoverBgColor="#2FBE8E"
          color="#fff"
          hoverColor="#fff"
          @click.native="isShowPopoverAdd = true"
        >
          <i class="fas fa-user-plus" style="margin-right: 5px"></i>
          Thêm nhà cung cấp
        </button-option>
      </div>
      <div class="tools">
        <div class="search">
          <i class="fas fa-search"></i>
          <input
            v-model="search"
            type="text"
            placeholder="Tìm kiếm theo Mã, Tên NCC"
          />
          <i
            class="fas fa-times-circle search-remove"
            v-if="search"
            @click="search = ''"
          ></i>
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
              <th>Tên nhà cung cấp</th>
              <th>Địa chỉ</th>
              <th>SĐT</th>
              <th>Email</th>
              <th>Tùy chọn</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="supply in supplies" :key="supply.id">
              <td>
                <input type="checkbox" />
              </td>
              <td>{{ supply.supplyName }}</td>
              <td>{{ supply.supplyName }}</td>
              <td>{{ supply.supplyName }}</td>
              <td>{{ supply.supplyName }}</td>
              <td style="display: flex">
                <button-option
                  color="gray"
                  hoverColor="#fff"
                  bgColor="#ebebeb"
                  hoverBgColor="#2280ac"
                  style="margin-right: 10px"
                  @click.native="isShowPopoverEdit = true"
                >
                  <span>Sửa</span>
                </button-option>
                <button-option
                  color="#fff"
                  hoverColor="#fff"
                  bgColor="#F65454"
                  hoverBgColor="red"
                  @click.native="isShowDeleteMessage = true"
                >
                  <span>Xóa</span>
                </button-option>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <popover-edit
        :isShow="isShowPopoverEdit"
        :onHidden="HiddenPopoverEdit"
      ></popover-edit>
      <popover-add
        :isShow="isShowPopoverAdd"
        :onHidden="HiddenPopoverAdd"
      ></popover-add>
      <popup-warning
        title="Xóa khách hàng"
        detail="Bạn chắc chắn muốn xóa khách hàng này chứ ?"
        classIcon="fas fa-exclamation-circle warning-color"
        :isShow="isShowDeleteMessage"
        :onHidden="HiddenPopupDeleteMessage"
      >
        <button-option
          bgColor="#da221c"
          hoverBgColor="#FF4747"
          color="#fff"
          hoverColor="#fff"
          @click.native="HiddenPopupDeleteMessage"
        >
          <span>Xóa</span>
        </button-option>
        <button-option
          style="margin-right: 10px"
          bgColor="#ebebeb"
          hoverBgColor="gray"
          hoverColor="#fff"
          @click.native="HiddenPopupDeleteMessage"
        >
          <span>Đóng</span>
        </button-option>
      </popup-warning>
    </the-content>
    <the-navigation></the-navigation>
  </div>
</template>

<script>
import TheContent from '../components/layout/TheContent.vue'
import TheNavigation from '../components/layout/TheNavigation.vue'
import ButtonOption from '../components/common/Button'
import PopoverEdit from '../components/supply/components/PopoverEdit'
import PopupWarning from '../components/common/PopupWarning'
import PopoverAdd from '../components/supply/components/PopoverAdd.vue'
export default {
  data () {
    return {
      search: '',
      supplies: [],
      isShowPopoverEdit: false,
      isShowPopoverAdd: false,
      isShowDeleteMessage: false

    }
  },
  components: {
    TheContent,
    TheNavigation,
    ButtonOption,
    PopoverEdit,
    PopupWarning,
    PopoverAdd
  },
  created () {
    this.axios.get('/Supplys')
      .then(res => {
        this.supplies = res.data
      })
      .catch(e => console.log(e))
  },
  methods: {
    HiddenPopoverEdit () {
      this.isShowPopoverEdit = false
    },
    HiddenPopoverAdd () {
      this.isShowPopoverAdd = false
    },
    HiddenPopupDeleteMessage () {
      this.isShowDeleteMessage = false
    }
  }
}
</script>

<style>
</style>
