function sendWhatsAppOrder(event) {
    event.preventDefault(); // Form ko refresh hone se rokta hai

    // Form inputs ki values lena
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const category = document.getElementById('category').value;
    const orderDetails = document.getElementById('orderDetails').value;

    // Direct WhatsApp Number (Country Code 92 ke sath)
    const whatsappNumber = "923128518799";

    // WhatsApp Message ka Format
    const message = `*Naya Order - Bukhari Oil Depot*%0A%0A` +
                    `*Naam:* ${encodeURIComponent(name)}%0A` +
                    `*Phone:* ${encodeURIComponent(phone)}%0A` +
                    `*Pata:* ${encodeURIComponent(address)}%0A` +
                    `*Category:* ${encodeURIComponent(category)}%0A` +
                    `*Order Details:* ${encodeURIComponent(orderDetails)}`;

    // WhatsApp link open karna
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}