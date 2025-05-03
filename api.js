const api = {
  getData: async () => {
    const token = localStorage.getItem("token");
    // FILL-IN-THE-BLANK 5
    const res = await fetch(__________________, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // FILL-IN-THE-BLANK 6
        Authorization: _____________,
      },
    });
    const data = await res.json();

    return data;
  },

  getOrderById: async (id) => {
    const res = await fetch(`http://localhost:3000/api/order/${id}`);
    const data = await res.json();

    return data;
  },

  deleteByReceiptNo: async (receiptId) => {
    const res = await fetch(`http://localhost:3000/api/order/${receiptId}`, {
      method: "DELETE",
    });

    return res;
  },

  createOrder: async ({ name, order }) => {
    const res = await fetch("http://localhost:3000/api/order/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        order,
      }),
    });

    return res;
  },

  updateOrder: async ({ id, order, name, isReady }) => {
    const res = await fetch(`http://localhost:3000/api/order/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        order,
        isReady,
      }),
    });

    return res;
  },

  findData: async (keywords) => {
    // const res = await fetch(`http://localhost:3000/api/search?k=${keywords}`);
    // const data = await res.json();

    return data;
  },

  createUser: async ({ username, password }) => {
    // FILL-IN-THE-BLANK 1
    const res = await fetch(________________, {
      // FILL-IN-THE-BLANK 2
      method: _____,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const { data } = await res.json();
    if (data?.token) {
      localStorage.setItem("token", token);
    }

    window.location.href = "/login.html";
  },

  loginUser: async ({ username, password }) => {
    // FILL-IN-THE-BLANK 3
    const res = await fetch(____________, {
      // FILL-IN-THE-BLANK 4
      method: _______,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const { data } = await res.json();
    if (data?.token) {
      localStorage.setItem("token", token);
    }

    window.location.href = "/index.html";
  },
};

export default api;
