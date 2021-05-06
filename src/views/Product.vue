<template>
  <div>
    <the-content>
      <div class="content-top">
        <h2 class="title">Danh sách sản phẩm</h2>
        <button-option
          bgColor="#019160"
          hoverBgColor="#2FBE8E"
          color="#fff"
          hoverColor="#fff"
          @click.native="isShowPopoverAdd = true"
        >
          <i class="fas fa-user-plus" style="margin-right: 5px"></i>
          Thêm sản phẩm
        </button-option>
      </div>
      <div class="tools">
        <div class="search">
          <i class="fas fa-search"></i>
          <input
            v-model="request.q"
            type="text"
            placeholder="Tìm kiếm theo Mã, Tên SP"
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
            <tr v-for="product in products.data" :key="product.id">
              <td>
                <input type="checkbox" />
              </td>
              <td>{{ product.productCode }}</td>
              <td>{{ product.productName }}</td>
              <td>{{ product.categoryName }}</td>
              <td>{{ product.productPrice }}</td>
              <td>{{ product.supplyName }}</td>
              <td>{{ product.productAmount }}</td>
              <td>{{ product.productColor }}</td>
              <td>
                <status styles="background-color: yellow; color: gray">
                  <span>Chưa duyệt</span>
                </status>
              </td>
              <td style="display: flex">
                <button-option
                  color="gray"
                  hoverColor="#fff"
                  bgColor="#ebebeb"
                  hoverBgColor="#2280ac"
                  style="margin-right: 10px"
                  @click.native="
                    isShowPopoverEdit = true;
                    productEdit = product;
                  "
                >
                  <span>Sửa</span>
                </button-option>
                <button-option
                  color="#fff"
                  hoverColor="#fff"
                  bgColor="#F65454"
                  hoverBgColor="red"
                  @click.native="
                    isShowDeleteMessage = true;
                    productDeleteId = product.productId;
                  "
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
        :product="productEdit"
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
          @click.native="DeleteProduct"
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
    <the-navigation
      :total="products.count"
      :totalPages="products.totalPage"
      :currentPage="request.pageIndex"
      title="sản phẩm"
      @pagechanged="onPageChange"
    ></the-navigation>
  </div>
</template>

<script>
import TheContent from '../components/layout/TheContent.vue'
import TheNavigation from '../components/layout/TheNavigation.vue'
import ButtonOption from '../components/common/Button'
import Status from '../components/common/Status'
import PopoverEdit from '../components/product/components/PopoverEdit'
import PopupWarning from '../components/common/PopupWarning'
import PopoverAdd from '../components/product/components/PopoverAdd.vue'
export default {
  data () {
    return {
      search: '',
      products: [],
      productEdit: null,
      productDeleteId: null,
      isShowPopoverEdit: false,
      isShowPopoverAdd: false,
      isShowDeleteMessage: false,
      request: {
        q: '',
        pageIndex: 1,
        pageSize: 5
      }
    }
  },
  components: {
    TheContent,
    TheNavigation,
    ButtonOption,
    Status,
    PopoverEdit,
    PopupWarning,
    PopoverAdd
  },
  created () {
    this.axios
      .get('/Products')
      .then((res) => {
        this.products = res.data
      })
      .catch((e) => console.log(e))
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
    },
    DeleteProduct () {
      this.isShowDeleteMessage = false
      this.axios
        .delete('/Products/' + this.productDeleteId)
        .then((res) => {
          console.log('Xoa thanh cong')
          this.products = this.products.filter(
            (product) => product.productId !== this.productDeleteId
          )
        })
        .catch((e) => console.log(e))
    },
    onPageChange (page) {
      this.request.pageIndex = page
    }
  },
  watch: {
    'request.q' () {
      this.request.pageIndex = 1
    },
    request: {
      handler (val) {
        this.axios
          .get(
            `/Products?q=${this.request.q}&PageIndex=${this.request.pageIndex}&PageSize=${this.request.pageSize}`
          )
          .then((res) => {
            this.products = res.data
          })
          .catch((e) => console.log(e))
      },
      deep: true
    }
  }
}
</script>

<style>
</style>
