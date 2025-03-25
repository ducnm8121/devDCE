document.addEventListener("DOMContentLoaded", function () {
  // Kiểm tra đăng nhập
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    window.location.href = "../index.html";
    return;
  }

  // Hiển thị tên người dùng
  const username = localStorage.getItem("username");
  if (username) {
    document.getElementById("username-display").textContent = username;
  }

  // Xử lý đăng xuất
  document.getElementById("logout-btn").addEventListener("click", function () {
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
    window.location.href = "../index.html";
  });

  // Xử lý chuyển trang
  function loadPage(page) {
    document.getElementById("content-frame").src = page;
  }

  // Xử lý các nút hành động
  const actionButtons = document.querySelectorAll(".action-btn");
  actionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const action = this.textContent;
      switch (action) {
        case "Tạo báo cáo":
          alert("Chức năng tạo báo cáo CAP");
          break;
        case "Thêm mới":
          alert("Chức năng thêm Tape mới");
          break;
        case "Xuất báo cáo":
          alert("Chức năng xuất báo cáo lịch sử");
          break;
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      alert("⚠️ Bạn cần đăng nhập trước!");
      window.location.href = "../login.html";
    }
  });
});
