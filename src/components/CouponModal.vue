<template>
    <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    aria-labelledby="couponModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content rounded-0">
            <div class="modal-header bg-secondary rounded-0">
                <h5
                class="modal-title text-white"
                id="exampleModalLabel">{{ isNew ? "新增優惠券" : `優惠券編號: ${tempCoupon.id}` }}</h5>
                <button
                type="button"
                class="btn-close bg-white rounded-0"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <VForm v-slot="{ errors }" @submit="submit">
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-3">
                                <label for="couponTitle" class="mb-2">優惠券名稱</label>
                                <VField
                                id="couponTitle"
                                name="couponTitle"
                                type="text"
                                rules="required"
                                class="form-control mb-1"
                                :class="{
                                    'is-invalid': errors['couponTitle'],
                                    'is-valid': !errors['couponTitle'] && tempCoupon.title,
                                }"
                                placeholder="請輸入產品名稱"
                                v-model="tempCoupon.title"
                                ></VField>
                                <ErrorMessage name="couponTitle"></ErrorMessage>
                            </div>
                            <div class="mb-3">
                                <label for="couponPercent" class="form-label">折扣</label>
                                <VField
                                name="couponPercent"
                                v-model.number="tempCoupon.percent"
                                type="number"
                                min="1"
                                class="form-control"
                                id="couponPercent"
                                rules="numeric|required"
                                :class="{
                                    'is-invalid': errors['couponPercent'],
                                    'is-valid': !errors['couponPercent']
                                    && tempCoupon.percent
                                }"
                                >
                                </VField>
                                <ErrorMessage name="couponPercent"></ErrorMessage>
                            </div>
                            <div class="mb-3">
                                <label for="couponDueDate" class="form-label">到期日</label>
                                <VField
                                name="couponDueDate"
                                v-model.number="tempCoupon.due_date"
                                type="number"
                                class="form-control"
                                id="couponDueDate"
                                rules="numeric|required"
                                :class="{
                                    'is-invalid': errors['couponDueDate'],
                                    'is-valid': !errors['couponDueDate'] && tempCoupon.udue_date,
                                }"
                                ></VField>
                                <ErrorMessage name="couponDueDate"></ErrorMessage>
                            </div>
                            <div class="mb-3">
                                <label for="couponCode" class="form-label">優惠代碼</label>
                                <VField
                                name="couponCode"
                                v-model="tempCoupon.code"
                                type="text"
                                class="form-control"
                                id="couponCode"
                                rules="required"
                                :class="{
                                    'is-invalid': errors['couponCode'],
                                    'is-valid': !errors['couponCode'] && tempCoupon.code,
                                }"
                                ></VField>
                                <ErrorMessage name="couponCode"></ErrorMessage>
                            </div>
                            <div>
                                <input
                                v-model.number="tempCoupon.is_enabled"
                                class="form-check-input me-2" type="checkbox"
                                :value="tempCoupon.is_enabled"
                                id="orderIsEnabled">
                                <label class="form-check-label" for="orderIsEnabled">
                                    是否啟用
                                </label>
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
                <button type="button" class="btn btn-secondary"
                @click="submit();
                this.closeModal();"
                >{{ isNew ? "新增" : "修改" }}</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'CouponModal',
  props: ['coupon', 'isNew'],
  data() {
    return {
      modal: null,
      tempCoupon: {
        is_enabled: 1,
      },
    };
  },
  watch: {
    tempCoupon: {
      handler() {
        this.tempCoupon.is_enabled = this.tempCoupon.is_enabled ? 1 : 0;
      },
      deep: true,
    },
    coupon: {
      handler() {
        this.tempCoupon = JSON.parse(JSON.stringify(this.coupon));
        console.log('coupon', this.coupon);
      },
      deep: true,
    },
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    submit() {
      this.$emit('update-coupon', this.tempCoupon);
    },
  },
  mounted() {
    this.modal = new window.bootstrap.Modal(document.getElementById('couponModal'));
  },
};
</script>
