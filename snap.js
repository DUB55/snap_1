// Select the existing image element
const existingImage = document.querySelector('img[src="/accounts/static/images/ghost/snapchat-app-icon.svg"]');

if (existingImage) {
    // Create a new image element
    const newImage = document.createElement('img');
    newImage.src = 'https://www.logo.wine/a/logo/Snapchat/Snapchat-Ghost-Outlined-Logo.wine.svg';
    newImage.alt = 'Snapchat Ghost Icon';
    newImage.style.width = '100px'; // Set the desired width
    newImage.style.height = 'auto'; // Maintain aspect ratio

    // Replace the existing image with the new image
    existingImage.parentNode.replaceChild(newImage, existingImage);
}
