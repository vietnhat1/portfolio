const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('D:/portfolio'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/hello', (req, res) => {
  console.log("📥 Form data:", req.body);

  const firstname = req.body.firstname || '';
  const lastname = req.body.lastname || '';
  const age = req.body.age || '';
  const gender = req.body.gender || '';

  if (!firstname || !lastname || !gender) {
    return res.send(`
      <html>
      <head><title>Lỗi</title></head>
      <body>
        <h2>Lỗi: Bạn phải nhập đầy đủ họ, tên và chọn giới tính trước khi gửi form!</h2>
        <a href="/">Quay lại</a>
      </body>
      </html>
    `);
  }

  res.send(`
    <html>
    <head><title>Kết quả</title></head>
    <link rel="stylesheet" href="style.css"> 

    <body>
      <div><h2>Xin chào, ${firstname} ${lastname}!</h2>
      <p>Tuổi: ${age}</p>
      <p>Giới tính: ${gender}</p>
      <a href="/">Quay lại</a></div>
      <div><h2>Projects</h2></div>
      <div class="project">
        <h3>Project 1</h3>
        <p>Mô tả dự án 1</p>
        <a href="https://github.com/vietnhat1/Hotel_Managerment_v2">Xem chi tiết</a>
      
      </div>
      <div class="project">
        <h3>Project 2</h3>
        <p>Mô tả dự án 2</p>
        <a href="https://github.com/vietnhat1/Hotel_Managerment_v2">Xem chi tiết</a>
      </div>
      <div class="project">
        <h3>Project 3</h3>
        <p>Mô tả dự án 3</p>
        <a href="https://github.com/vietnhat1/Hotel_Managerment_v2">Xem chi tiết</a>
      </div> 
    </body>
    </html>
  `);
    
});

app.listen(port, () => {
  console.log("🚀 Server đang chạy tại http://localhost:" + port);
});
