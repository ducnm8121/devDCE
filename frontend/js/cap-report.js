document.addEventListener("DOMContentLoaded", () => {
    loadReports();
});

// Mẫu dữ liệu báo cáo
let reports = [
    { id: 1, ca: "Ca H1", date: "2025-03-25", user: "phuc.tv", file: "H1_25_03_2025.xlsx", status: "Hoàn thành" },
    { id: 2, ca: "Ca H2", date: "2025-03-24", user: "linhdq", file: "H2_24_03_2025.xlsx", status: "Đang xử lý" }
];

// Load dữ liệu lên bảng
function loadReports() {
    const tableBody = document.getElementById("reportBody");
    tableBody.innerHTML = "";
    
    reports.forEach((report, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${report.ca}</td>
            <td>${report.date}</td>
            <td>${report.user}</td>
            <td><a href="#">${report.file}</a></td>
            <td>${report.status}</td>
            <td class="action-btn">
                <button onclick="viewReport(${report.id})">👁️</button>
                <button onclick="editReport(${report.id})">✏️</button>
                <button onclick="deleteReport(${report.id})">🗑️</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Tìm kiếm theo ngày báo cáo
function searchReports() {
    let searchDate = document.getElementById("search-date").value;
    if (!searchDate) {
        alert("Vui lòng chọn ngày báo cáo.");
        return;
    }

    const filteredReports = reports.filter(report => report.date === searchDate);
    if (filteredReports.length === 0) {
        alert("Không tìm thấy báo cáo nào!");
    } else {
        reports = filteredReports;
        loadReports();
    }
}

// Thêm mới báo cáo
function addNewReport() {
    let newId = reports.length + 1;
    reports.push({
        id: newId,
        ca: `Ca ${newId}`,
        date: "2025-03-26",
        user: "newUser",
        file: `New_Ca_${newId}.xlsx`,
        status: "Chờ xử lý"
    });
    loadReports();
}

// Xem báo cáo
function viewReport(id) {
    alert("Xem báo cáo ID: " + id);
}

// Chỉnh sửa báo cáo
function editReport(id) {
    alert("Chỉnh sửa báo cáo ID: " + id);
}

// Xóa báo cáo
function deleteReport(id) {
    reports = reports.filter(report => report.id !== id);
    loadReports();
