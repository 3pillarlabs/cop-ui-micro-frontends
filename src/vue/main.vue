
<script>
import { connect } from "redux-connect-vue";

const state = (state) => ({
  Items: state.ItemReducer.items,
});
const actions = (dispatch) => ({});
export default connect(state, actions)({});
</script>

<template>
  <div class="form-container">
    <h1>Vue <span class="text-primary">List</span></h1>
    <label v-if="Items.length === 0">List Empty please add an Item</label>
    <div v-if="Items.length > 0">
     
    <div class='card bg-light' v-for="(item, index) in Items" :key="index">
      <h3 class='text-primary text-left'>
       Name: {{item.name}}
      </h3>
      <ul class='list'>
          <li>
            <i class='fas fa-envelope-open'></i>Brand: {{item.brand}}
          </li>
          <li>
            <i class='fas fa-phone'></i> Price: {{item.price}}
          </li>
      </ul>
      <p>
        <button class='btn btn-dark btn-sm'>
          Edit
        </button>
        <button class='btn btn-danger btn-sm'>
          Delete
        </button>
      </p>
    </div>
    </div>
  </div>
</template>








