// notification-helper.js

const requestPermission = async () => {
    const result = await Notification.requestPermission();
    
    if (result === 'denied') {
      console.log('Fitur Notification tidak diijinkan');
      return;
    }
    
    if (result === 'default') {
      console.log('Pengguna Menutup kotak dialog permintaan ijin');
      return;
    }
    
    console.log('Fitur notification diijinkan');
  };
  
  const renderNotifikasi = () => {
    if ('Notification' in window) {
      requestPermission();
    } else {
      console.error('Browser tidak mendukung fitur notifikasi.');
    }
  };
  
  export default renderNotifikasi;
  