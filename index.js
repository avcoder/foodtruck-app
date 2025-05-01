// import api from "./api.js";

const root = document.querySelector("#root");
const deleteConfirmed = document.querySelector("#delete-confirmed");
const deleteText = document.querySelector("#delete-text");
const submitOrder = document.querySelector("#submit-order");
const updateOrder = document.querySelector("#update-order");
const editReceiptId = document.querySelector("#edit-receipt-id");
const isReadySwitch = document.querySelector("#is-ready");
const customerOrder = document.querySelector("#customer-order");
const customerOrder2 = document.querySelector("#customer-order-2");
const nameOnOrder = document.querySelector("#name-on-order");
const nameOnOrder2 = document.querySelector("#name-on-order-2");
const search = document.querySelector("#search");

const tempData = [
  { id: 1, name: "al", order: ["1 pop", "1 taco"], isReady: false },
];

function render(data = tempData) {
  root.innerHTML = data
    .map(
      (order) => `
        <tr>
        <td>${order.receiptId}</td>
        <td>${order.name}</td>
            <td>
              <div class="collapsible">
                <input id="collapsible-${
                  order.receiptId
                }" type="checkbox" name="collapsible" />
                <label for="collapsible-${order.receiptId}"
                  >${order.order.join(", ")}</label
                >
                <div class="collapsible-body">
                  <ul>
                    ${order.order
                      .map(
                        (o) => `
                        <li>${o}</li>
                        `
                      )
                      .join("")}
                  </ul>
                </div>
              </div>
            </td>
            <td class="${order.isReady ? "text-success" : "text-secondary"}">
                ${order.isReady ? "Ready" : "In Progress"}
            </td>
            <td>
                <label data-op="edit" data-id="${
                  order.receiptId
                }" class="paper-btn margin btn-small btn-warning" for="modal-3">
                    Edit
                </label>
            </td>
            <td>
              <label data-op="delete" data-id="${
                order.receiptId
              }" class="paper-btn margin btn-small btn-danger" for="modal-2">
                Delete
            </label>
            </td>
          </tr>
    `
    )
    .join("");
}

render();
