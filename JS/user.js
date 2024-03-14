// JavaScript for handling photo upload and display
const photoUploadInput = document.getElementById('photo-upload');
const profilePic = document.getElementById('profile-pic');

// Change photo when the file input changes
photoUploadInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePic.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

// Trigger file input click when change photo button is clicked
const changePhotoBtn = document.getElementById('change-photo-btn');
changePhotoBtn.addEventListener('click', function() {
    photoUploadInput.click();
});
