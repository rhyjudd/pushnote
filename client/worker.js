console.log('Service worker loaded.');

self.addEventListener('push', e=>{
  const data = e.data.json();
  console.log('Push has been recieved.');
  self.registration.showNotification(data.title,{
    body:'Notified by Rhyan Judd',
    icon:''
  });
});