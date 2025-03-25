document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Kiểm tra mật khẩu xác nhận
    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    // Lấy danh sách users từ localStorage (nếu có)
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra username đã tồn tại chưa
    if (users.some((user) => user.username === username)) {
      alert("Tên đăng nhập đã tồn tại!");
      return;
    }

    // Thêm user mới
    users.push({
      username: username,
      password: password,
    });

    // Lưu lại vào localStorage
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công!");
    window.location.href = "../index.html";
  });
