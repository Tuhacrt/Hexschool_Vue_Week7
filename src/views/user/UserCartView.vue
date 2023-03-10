<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue';
import axios, { AxiosError } from 'axios';
import { Form } from 'vee-validate';

import type {
  UserForm, Carts, Cart, User,
} from '@/types';

const { VITE_URL, VITE_PATH } = import.meta.env;

const state = reactive({
  cart: {} as Carts,
  form: {
    user: {} as User,
    message: '' as string,
  } as UserForm,
  isLoading: false as boolean,
});

const formRef = ref<typeof Form>();

const getCart = async () => {
  const url = `${VITE_URL}/api/${VITE_PATH}/cart`;
  state.isLoading = true;

  try {
    const response = await axios.get(url);
    state.isLoading = false;
    state.cart = response.data.data;
  } catch (err: unknown) {
    state.isLoading = false;
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

const updateCart = async (cartData: Cart) => {
  const url = `${VITE_URL}/api/${VITE_PATH}/cart/${cartData.id}`;
  const data = { product_id: cartData.id, qty: cartData.qty };
  state.isLoading = true;

  try {
    const response = await axios.put(url, { data });
    state.isLoading = false;
    alert(response.data.message);
    getCart();
  } catch (err: unknown) {
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

const deleteAllCarts = async () => {
  const url = `${VITE_URL}/api/${VITE_PATH}/carts`;
  state.isLoading = true;

  try {
    const response = await axios.delete(url);
    state.isLoading = false;
    alert(response.data.message);
    getCart();
  } catch (err: unknown) {
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

const deleteCartItem = async (productId: string) => {
  const url = `${VITE_URL}/api/${VITE_PATH}/cart/${productId}`;
  state.isLoading = true;

  try {
    const response = await axios.delete(url);
    state.isLoading = false;
    alert(response.data.message);
    getCart();
  } catch (err: unknown) {
    state.isLoading = false;
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

const createOrder = async () => {
  const url = `${VITE_URL}/api/${VITE_PATH}/order`;
  const data = state.form;
  state.isLoading = true;

  try {
    const response = await axios.post(url, { data });
    formRef.value?.resetForm();
    alert(response.data.message);
    getCart();
  } catch (err: unknown) {
    state.isLoading = false;
    if (err instanceof AxiosError) alert(err.response?.data.message);
  }
};

onMounted(() => {
  getCart();
});
</script>

<template>
  <div class="container">
    <!-- Cart -->
    <div class="mt-4">
      <div class="text-end">
        <button
          class="btn btn-outline-danger"
          type="button"
          :disabled="!state.cart?.carts?.length"
          @click="deleteAllCarts"
        >
          ???????????????
        </button>
      </div>
      <div
        v-if="!state.cart?.carts?.length"
        class="h1 text-white font-weight-bold bg-dark"
      >
        ????????????????????????
      </div>
      <table v-else class="table align-middle">
        <thead>
          <tr>
            <th />
            <th>??????</th>
            <th style="width: 150px">??????/??????</th>
            <th>??????</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="state.cart?.carts">
            <tr v-for="item in state.cart.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  :disabled="state.isLoading"
                  @click="deleteCartItem(item.id)"
                >
                  <div>???????????????</div>
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div
                  v-if="item.product.price < item.product.origin_price"
                  class="text-success"
                >
                  ??????????????????
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <input
                      v-model.number="item.qty"
                      min="1"
                      type="number"
                      class="form-control"
                      :disabled="state.isLoading"
                      @change="updateCart(item)"
                    />
                    <span id="basic-addon2" class="input-group-text">{{
                      item.product.unit
                    }}</span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                <small
                  v-if="item.product.price < item.product.origin_price"
                  class="text-success"
                  >????????????{{ item.final_total }}</small
                >
                <small v-else>{{ item.total }}</small>
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr v-if="state.cart.final_total < state.cart.total">
            <td colspan="3" class="text-end text-success">?????????</td>
            <td class="text-end text-success">
              {{ state.cart.final_total }}
            </td>
          </tr>
          <tr v-else>
            <td colspan="3" class="text-end">??????</td>
            <td class="text-end">
              {{ state.cart.total }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- Cart -->

    <!-- Form -->
    <div class="my-5 row justify-content-center">
      <Form
        ref="formRef"
        v-slot="{ errors }"
        class="col-md-6"
        @submit="createOrder"
      >
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            v-model="state.form.user.email"
            name="email"
            label="Email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors.email }"
            placeholder="????????? Email"
            rules="required|email"
          />
          <ErrorMessage name="email" class="invalid-feedback" />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">???????????????</label>
          <Field
            id="name"
            v-model="state.form.user.name"
            name="name"
            label="??????"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.name }"
            placeholder="???????????????"
            rules="required"
          />
          <ErrorMessage name="name" class="invalid-feedback" />
        </div>
        <div class="mb-3">
          <label for="tel" class="form-label">???????????????</label>
          <Field
            id="tel"
            v-model="state.form.user.tel"
            name="tel"
            label="??????"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors.tel }"
            placeholder="???????????????"
            rules="required|min:8|max:10"
          />
          <ErrorMessage name="tel" class="invalid-feedback" />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">???????????????</label>
          <Field
            id="address"
            v-model="state.form.user.address"
            name="address"
            label="??????"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.address }"
            placeholder="???????????????"
            rules="required"
          />
          <ErrorMessage name="address" class="invalid-feedback" />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">??????</label>
          <Field
            id="message"
            v-model="state.form.message"
            name="message"
            as="textarea"
            class="form-control"
            cols="30"
            rows="10"
          />
        </div>
        <div class="text-end">
          <button
            type="submit"
            class="btn btn-danger"
            :disabled="!state.cart?.total || state.isLoading"
          >
            ????????????
          </button>
        </div>
      </Form>
    </div>
    <!-- Form -->
  </div>
  <!--  Loading Component-->
  <Loading
    v-model:active="state.isLoading"
    :can-cancel="true"
    :is-full-page="true"
  />
  <!--  Loading Component-->
</template>
