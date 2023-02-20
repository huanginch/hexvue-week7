<template>
    <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    data-bs-backdrop="static"
    aria-labelledby="productModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content rounded-0">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{  }}</h5>
                <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <VForm v-slot="{ errors }" @submit="submit">
                    <div class="row">
                        <div class="col-6">
                            <div class="mb-3">
                                <label for="productTitle" class="mb-2">產品名稱</label>
                                <VField
                                id="productTitle"
                                name="productTitle"
                                type="text"
                                rules="required"
                                class="form-control mb-1"
                                :class="{
                                    'is-invalid': errors['productTitle'],
                                    'is-valid': !errors['productTitle'] && tempProduct.title,
                                }"
                                placeholder="請輸入產品名稱"
                                v-model="tempProduct.title"
                                ></VField>
                                <ErrorMessage name="productTitle"></ErrorMessage>
                            </div>
                            <div class="mb-3 d-flex justify-content-between">
                                <div>
                                    <label for="productCategory" class="form-label">分類</label>
                                    <VField
                                    name="productCategory"
                                    v-model="tempProduct.category"
                                    type="text"
                                    class="form-control"
                                    id="productCategory"
                                    rules="required"
                                    :class="{
                                        'is-invalid': errors['productCategory'],
                                        'is-valid': !errors['productCategory']
                                        && tempProduct.category,
                                    }"
                                    >
                                    </VField>
                                    <ErrorMessage name="productCategory"></ErrorMessage>
                                </div>
                                <div>
                                    <label for="productUnit" class="form-label">單位</label>
                                    <VField
                                    name="productUnit"
                                    v-model="tempProduct.unit"
                                    type="text"
                                    class="form-control"
                                    id="productUnit"
                                    rules="required"
                                    :class="{
                                        'is-invalid': errors['productUnit'],
                                        'is-valid': !errors['productUnit'] && tempProduct.unit,
                                    }"
                                    ></VField>
                                    <ErrorMessage name="productUnit"></ErrorMessage>
                                </div>
                            </div>
                            <div class="mb-3 d-flex justify-content-between">
                                <div>
                                    <label for="productOriginPrice" class="form-label">原價</label>
                                    <VField
                                    name="productOriginPrice"
                                    v-model.number="tempProduct.origin_price"
                                    type="number"
                                    min="0"
                                    class="form-control"
                                    id="productOriginPrice"
                                    rules="numeric|required"
                                    :class="{
                                        'is-invalid': errors['productOriginPrice'],
                                        'is-valid': !errors['productOriginPrice']
                                        && tempProduct.origin_price,
                                    }"
                                    ></VField>
                                    <ErrorMessage name="productOriginPrice"></ErrorMessage>
                                </div>
                                <div>
                                    <label for="productPriice" class="form-label">售價</label>
                                    <VField
                                    name="productPrice"
                                    v-model.number="tempProduct.price"
                                    type="number"
                                    min="0"
                                    class="form-control"
                                    id="productPrice"
                                    rules="numeric|required"
                                    :class="{
                                        'is-invalid': errors['productPrice'],
                                        'is-valid': !errors['productPrice'] && tempProduct.price,
                                    }"
                                    ></VField>
                                    <ErrorMessage name="productPrice"></ErrorMessage>
                                </div>
                            </div>
                            <div class="mb-3 d-flex justify-content-between">
                                <div>
                                    <label for="productCountry" class="form-label">產地</label>
                                    <VField
                                    name="productCountry"
                                    v-model="tempProduct.country"
                                    type="text"
                                    class="form-control"
                                    id="productCountry"
                                    rules="required"
                                    :class="{
                                        'is-invalid': errors['productCountry'],
                                        'is-valid': !errors['productCountry']
                                        && tempProduct.country,
                                    }"
                                    ></VField>
                                    <ErrorMessage name="productCountry"></ErrorMessage>
                                </div>
                                <div>
                                    <label for="productAbv" class="form-label">酒精濃度</label>
                                    <VField
                                    name="productAbv"
                                    v-model="tempProduct.abv"
                                    type="text"
                                    class="form-control"
                                    id="productAbv"
                                    rules="required"
                                    :class="{
                                        'is-invalid': errors['productAbv'],
                                        'is-valid': !errors['productAbv']
                                        && tempProduct.abv,
                                    }"
                                    >
                                    </VField>
                                    <ErrorMessage name="productAbv"></ErrorMessage>
                                </div>
                            </div>
                            <div class="mb-3 d-flex justify-content-between">
                                <div>
                                    <label for="productVolume" class="form-label">容量</label>
                                    <VField
                                    name="productVolume"
                                    v-model="tempProduct.capacity"
                                    type="text"
                                    class="form-control"
                                    id="productVolume"
                                    rules="required"
                                    :class="{
                                        'is-invalid': errors['productVolume'],
                                        'is-valid': !errors['productVolume']
                                        && tempProduct.capacity,
                                    }"
                                    ></VField>
                                    <ErrorMessage name="productVolume"></ErrorMessage>
                                </div>
                            </div>
                            <hr>
                            <div class="mb-3">
                                <label for="productDescription" class="form-label">產品描述</label>
                                <textarea
                                v-model="tempProduct.description"
                                class="form-control" id="productDescription"
                                rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                                <input
                                v-model="tempProduct.is_enabled"
                                class="form-check-input me-2" type="checkbox"
                                :value="tempProduct.is_enabled"
                                id="productIsEnabled">
                                <label class="form-check-label" for="productIsEnabled">
                                    是否啟用
                                </label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <label for="productMainImg" class="form-label">主要圖片</label>
                                <VField
                                name="productMainImg"
                                v-model="tempProduct.imageUrl"
                                class="form-control mb-2"
                                type="text" id="productMainImg"
                                placeholder="請輸入圖片連結"
                                rules="required"
                                :class="{
                                    'is-invalid': errors['productMainImg'],
                                    'is-valid': !errors['productMainImg']
                                    && tempProduct.imageUrl,
                                }"
                                ></VField>
                                <img v-if="tempProduct.imageUrl"
                                :src="tempProduct.imageUrl" alt="main_image" class="img-fluid">
                                <ErrorMessage name="productMainImg"></ErrorMessage>
                            </div>
                            <div class="mb-3">
                                <h3>其他圖片</h3>
                                <div class="mb-3"
                                v-for="(img, index) in tempProduct.imagesUrl" :key="index">
                                    <label for="productOtherImg" class="form-label">圖片網址</label>
                                    <VField
                                    name="productOtherImg"
                                    v-model="tempProduct.imagesUrl[index]"
                                    class="form-control mb-2"
                                    type="text" id="productOtherImg"
                                    placeholder="請輸入圖片連結"></VField>
                                    <img v-if="img" :src="img" :alt="index" class="img-fluid mb-2">
                                    <button type="button"
                                    class="btn btn-outline-primary w-25"
                                    @click="removeOtherImg(index)">刪除</button>
                                </div>
                                <button v-if="showAddImgBtn"
                                type="button"
                                class="btn btn-outline-secondary w-25"
                                @click="this.tempProduct.imagesUrl.push('');">新增圖片</button>
                            </div>
                        </div>
                    </div>
                </VForm>
            </div>
            <div class="modal-footer">
                <button
                type="button"
                class="btn btn-outline-primary"
                data-bs-dismiss="modal">
                    取消
                </button>
                <button
                type="button"
                class="btn btn-secondary"
                @click="updateProduct(tempProduct, isNew);
                this.hideModal();"
                >{{ isNew ? "新增" : "修改" }}</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import productStore from '../stores/productStore';

export default {
  name: 'ProductModal',
  props: ['product', 'isNew'],
  data() {
    return {
      modal: null,
      tempProduct: {},
      showAddImgBtn: true,
    };
  },
  watch: {
    product() {
      this.tempProduct = JSON.parse(JSON.stringify(this.product));
    },
    tempProduct: {
      handler() {
        // limit the number of images to 5
        if (this.tempProduct.imagesUrl === undefined) {
          this.tempProduct.imagesUrl = [];
          return;
        }
        if (this.tempProduct.imagesUrl.length >= 5) {
          this.showAddImgBtn = false;
        } else {
          this.showAddImgBtn = true;
        }
      },
      deep: true, // watch the object deeply
    },
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    removeOtherImg(index) {
      this.tempProduct.imagesUrl.splice(index, 1);
    },
    ...mapActions(productStore, ['updateProduct']),
  },
  mounted() {
    this.modal = new window.bootstrap.Modal(document.getElementById('productModal'));
  },
};
</script>
