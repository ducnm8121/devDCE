// Tạo mảng users để lưu trữ tài khoản mặc định
const users = [
  { username: "admin", password: "123" },
  { username: "user1", password: "123" },
  { username: "user2", password: "123" },
];

document.querySelector(".login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Kiểm tra đăng nhập
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // Đăng nhập thành công
    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", "true");
    alert("Đăng nhập thành công!");
    window.location.href = "pages/dashboard.html";
  } else {
    // Đăng nhập thất bại
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
});
