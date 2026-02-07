document.querySelector('.nav-cta').addEventListener('click', function() {
    const tourSection = document.getElementById('tour-grid');
    
    tourSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
    });
});


document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('book-transfer-btn')) {
        const vehicleName = e.target.getAttribute('data-tour');
        const phoneNumber = "919009931435"; 
        const message = `${vehicleName} inquiry`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappURL, '_blank');
    }
});

document.querySelectorAll('.book-now').forEach(button => {
    button.addEventListener('click', function() {
        const tourName = this.getAttribute('data-tour');
        
        const phoneNumber = "919009931435"; 
        
        const message = `${tourName} Tour enquiry & details!`;
        
        const encodedMessage = encodeURIComponent(message);
        
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappURL, '_blank');
    });
});