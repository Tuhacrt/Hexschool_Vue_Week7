<script setup lang="ts">
import { onMounted, ref, toRef } from 'vue';
import * as bootstrap from 'bootstrap';
import type { Product } from '@/types';

const findMoreModalRef = ref<HTMLDivElement | string>('');
let findMoreModal: bootstrap.Modal;

onMounted(() => {
  findMoreModal = new bootstrap.Modal(findMoreModalRef?.value, {
    keyboard: false,
    backdrop: false,
  });
});

const props = defineProps<{
  tempProduct: Product;
  addToCart:(productId: string, quantity: number) => void; // eslint-disable-line
}>();
const productData = toRef(props, 'tempProduct');
let quantity = 1;

const showModal = () => {
  quantity = 1;
  findMoreModal?.show();
};
const hideModal = () => findMoreModal?.hide();

defineExpose({ showModal, hideModal });
</script>

<template>
  <div
    id="findMoreModal"
    ref="findMoreModalRef"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="findMoreModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="findMoreModalLabel" class="modal-title">
            <span>{{ productData.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="hideModal"
          />
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <img
                v-if="productData.imagesUrl"
                class="img-fluid"
                :src="productData?.imagesUrl[0]"
                alt=""
              />
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill">{{
                productData.category
              }}</span>
              <p>商品描述：{{ productData.description }}</p>
              <p>商品內容：{{ productData.content }}</p>
              <div
                v-if="productData.price < productData.origin_price"
                class="h5"
              >
                {{ productData.origin_price }} 元
              </div>
              <div v-else>
                <del class="h6">原價 {{ productData.origin_price }} 元</del>
                <div class="h5">現在只要 {{ productData.price }} 元</div>
              </div>
              <div>
                <div class="input-group">
                  <input
                    v-model.number="quantity"
                    min="1"
                    type="number"
                    class="form-control"
                  />
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="addToCart(productData.id, quantity)"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
            <!-- col-sm-6 end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
