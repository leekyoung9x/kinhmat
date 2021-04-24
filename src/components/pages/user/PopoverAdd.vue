<template>
<div v-if="isShow">
  <div class="mask" @click="isShowPopup = true"></div>
  <div class="popover">
    <div class="popover-title">
      <h2>Thêm người dùng</h2>
    </div>

    <div class="customer-input-top">
      <div class="customer-input-top-left">
        <div class="customer-input-item">
          <label for="customerCode">Mã khách hàng</label>
          <input v-model="user.code" type="text" id="customerCode" name="code" />
          <!-- <popup style="background-color: #FF4747; color: #fff ">
            <span>Mã khách hàng không được để trống</span>
          </popup> -->
        </div>
        <div class="customer-input-item">
          <label for="customerName">Tên khách hàng</label>
          <input v-model="user.name" type="text" id="customerName" name="name" />
        </div>
        <div class="customer-input-item">
          <label for="customerEmail">Email</label>
          <input v-model="user.email" type="text" id="customerEmail" name="email" />
        </div>
        <div class="customer-input-item">
          <label for="customerPhone">Số điện thoại</label>
          <input v-model="user.phone" type="text" id="customerPhone" name="phone" />
        </div>
      </div>

      <div class="customer-avatar customer-input-item">
        <span>Ảnh đại diện</span>
        <img src="../../../assets/content/img/avatar-luffy.jpg" alt="avatar">
        <div>
          <label for="customerUploadAvatar">Tải ảnh</label>
        </div>
        <input type="file" id="customerUploadAvatar" name="avatar" hidden/>
      </div>
    </div>

    <div class="customer-input-bottom">
      <div class="customer-input-item">
        <label class="gender-title">Giới tính</label>
        <div class="gender">
          <div class="gender-item gender-men">
            <input v-model="user.men" @click="user.women = false" type="checkbox" id="genderMen" name="gender">
            <label for="genderMen">Nam</label>
          </div>
          <div class="gender-item gender-women">
            <input v-model="user.women" @click="user.men = false" type="checkbox" id="genderWomen" name="gender">
            <label for="genderWomen">Nữ</label>
          </div>
        </div>
      </div>
      <div class="customer-input-item">
        <label for="customerDateOfBirth">Ngày sinh</label>
        <input v-model="user.dateOfBirth" type="date" id="customerDateOfBirth" name="date_of_birth" />
      </div>
      <div class="customer-input-item">
        <label for="customerAddress">Địa chỉ</label>
        <input v-model="user.address" type="text" id="customerAddress" name="address" />
      </div>
      <div class="customer-input-item customer-select">
        <label for="customerGroup">Nhóm khách hàng</label>
        <select name="customer-group" id="customerGroup">
          <option value="1">Tiềm năng</option>
          <option value="1">Thân thiết</option>
          <option value="1">Mới</option>
          <option value="1">Lâu năm</option>
          <option value="1">Đối tác</option>
        </select>
      </div>
    </div>

    <div class="group-btn">
      <a href="#" class="save-btn btn">Lưu</a>
      <a href="#" class="cancel-btn btn" @click="isShowPopup = true">Hủy bỏ</a>
    </div>

    <div class="close-btn" @click="onHidden">
      <i class="far fa-times-circle"></i>
    </div>
  </div>

  <popup-warning title="Đóng Form thêm người dùng" detail="Bạn chắc chắn muốn đóng form lại chứ ?" classIcon="fas fa-exclamation-circle" :isShow="isShowPopup" :onHidden="HiddenPopup">
    <button-option  bgColor="#019160" hoverBgColor="#17b94d" color="#fff" hoverColor="#fff" @click.native="onHidden(); HiddenPopup();">
      <span>Đóng</span>
    </button-option>
    <button-option bgColor="#ebebeb" hoverBgColor="gray" hoverColor="#fff" style="margin-right: 10px;" @click.native="HiddenPopup">
      <span>Giữ lại</span>
    </button-option>
  </popup-warning>
</div>

</template>

<script>
import ButtonOption from '../../common/Button.vue'
import PopupWarning from '../../common/PopupWarning.vue'
// import Popup from '../../common/Popup'
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    onHidden: {
      type: Function
    }
  },
  data () {
    return {
      isShowPopup: false,
      user: {
        code: '',
        name: '',
        email: '',
        phone: '',
        men: false,
        women: false,
        dateOfBirth: '',
        address: '',
        group: null
      }
    }
  },
  components: {
    PopupWarning,
    ButtonOption
    // Popup
  },
  methods: {
    HiddenPopup () {
      this.isShowPopup = false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/sass/common/_variable.scss";
.popover {
  position: fixed;
  width: 700px;
  height: 500px;
  top: 50%;
  left: 50%;
  margin-top: -250px; /* Negative half of height. */
  margin-left: -350px; /* Negative half of width. */
  background-color: $white-color;
  padding: 20px;
  border-radius: 10px;
  z-index: 99;

  &-title {
    text-transform: uppercase;
    padding-bottom: 20px;
    font-weight: bold;
  }
}

.customer-select {
  select {
    height: 39px;
    border-radius: 5px;
    border: 1px solid $border-color;
    outline: none;
    font-size: 14px;
  }
}

.customer-input {
  &-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    position: relative;
    label {
      font-size: 13px;
      color: $grey-color;
      margin-bottom: 5px;
    }

    input {
      height: 35px;
      border-radius: 5px;
      border: 1px solid $border-color;
      outline: none;
      font-size: 14px;
    }

    .gender {
      display: flex;

      &-title {
        margin-bottom: 15px;
      }

      &-men {
        display: flex;
        align-items: center;
        margin-right: 10px;
      }

      &-women {
        display: flex;
        align-items: center;
      }

      &-item {
        input {
          height: auto;
        }

        label {
          margin-bottom: 0;
        }
      }

    }
  }

  &-top, &-bottom {
    display: flex;
    flex-wrap: wrap;
  }

  &-top {
    &-left {
      width: 70%;
      padding-right: 20px;
    }

    .customer-avatar {
      width: 30%;

      span {
        margin-bottom: 10px;
        font-size: 13px;
        font-weight: normal;
        color: $grey-color;
      }

      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        display: block;
        border-radius: 20px;
        margin-bottom: 20px;
      }
      div {
        display: flex;
        flex-direction: row-reverse;
        padding-right: 20px;
        label {
        cursor: pointer;
        color: $grey-color;
        display: inline-block;
        width: 60px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #ebebeb;
        border-radius: 4px;

      }
      }

      label:hover {
        color: $white-color;
        background-color: $navigation-icon-hover-color;
      }
    }
  }

  &-bottom {
    .customer-input-item {
      width: 50%;
    }

    .customer-input-item:nth-child(odd) {
      padding-right: 10px;
    }
  }
}

.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background-color: $mask-color;
}

.group-btn {
  display: flex;
  flex-direction: row-reverse;
  .btn {
    display: inline-block;
    padding: 8px;
    border-radius: 5px;
    color: $grey-color;
    text-decoration: none;
  }

  .save-btn {
    background-color: $save-btn-bg-color;
    color: $white-color;
  }

  .save-btn:hover {
    background-color: $save-btn-bg-hover-color;
  }
  .cancel-btn {
    margin-right: 20px;
    background-color: $cancel-btn-color;
  }

  .cancel-btn:hover {
    background-color: $cancel-btn-hover-color;
    color: $white-color;
  }
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;

    &:hover {
      color: $close-btn-hover-color;
    }
}
</style>
