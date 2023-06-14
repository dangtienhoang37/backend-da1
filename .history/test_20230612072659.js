// Import Sequelize và kết nối đến cơ sở dữ liệu
import { Sequelize, DataTypes } from 'sequelize'


const sequelize = new Sequelize('doan1', 'root', '123456', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

// Định nghĩa model PDL
const PDL = sequelize.define('PDL', {
  IDP: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  dateTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  thong_tin_them: {
    type: DataTypes.STRING,
    allowNull: false
  },
  IDU: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  IDL: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'PDL', // Tên bảng trong cơ sở dữ liệu
  timestamps: false // Không sử dụng timestamps
});

// Đồng bộ hóa model với cơ sở dữ liệu
PDL.sync()
  .then(() => {
    console.log('Model PDL đã được tạo thành công.');
  })
  .catch((error) => {
    console.error('Đã xảy ra lỗi khi tạo model PDL:', error);
  });

// Export model PDL để có thể sử dụng trong ứng dụng Node.js
module.exports = PDL;