document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  if (!loginForm) {
    console.error(
      "❌ Không tìm thấy form đăng nhập! Kiểm tra lại id của <form>."
    );
    return;
  }

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("⚠️ Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Giả lập đăng nhập thành công
    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", "true");

    alert("✅ Đăng nhập thành công!");

    // Chuyển hướng đến Dashboard
    window.location.href = "../pages/dashboard.html";
  });
});
