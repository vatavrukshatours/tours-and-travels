document.querySelector('.nav-cta').addEventListener('click', function() {
    const tourSection = document.getElementById('tour-grid');
    
    // This provides a smooth scrolling experience
    tourSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
    });
});


document.querySelectorAll('.book-now').forEach(button => {
    button.addEventListener('click', function() {
        // Get the tour name from the data attribute
        const tourName = this.getAttribute('data-tour');
        
        // Your WhatsApp number (Format: CountryCode + Number)
        const phoneNumber = "911234567890"; 
        
        // Construct the message
        const message = `${tourName} inquiry`;
        
        // Encode the message for the URL
        const encodedMessage = encodeURIComponent(message);
        
        // Create the WhatsApp link
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Redirect the user
        window.open(whatsappURL, '_blank');
    });
});