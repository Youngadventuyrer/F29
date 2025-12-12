document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profile-form');
    const imageUpload = document.getElementById('image-upload');
    const imgPreview = document.getElementById('profile-img-preview');
    const statusMessage = document.getElementById('status-message');

    // --- Handling Image  ---
    imageUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imgPreview.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

 
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // In real appli
        const formData = {
            fullName: document.getElementById('full-name').value,
            email: document.getElementById('email').value,
            gender: document.getElementById('gender').value,
            age: document.getElementById('age').value,
            mainSkill: document.getElementById('main-skill').value,
            offerDetails: document.getElementById('offer-details').value,
            returnDetails: document.getElementById('return-details').value,
        };
        
        console.log("Profile Data Captured:", formData);


        
        // Showing Success Message
        statusMessage.textContent = '✅ Profile successfully updated! Your data is now live.';
        statusMessage.classList.add('show-message');

        // Hide message after a few seconds Animation
        setTimeout(() => {
            statusMessage.classList.remove('show-message');
        }, 3500);
        
    });
});