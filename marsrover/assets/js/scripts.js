 async function GoSearch() {

    
    // Get selected rover and date
    let rover = $('input[name="rover"]:checked').val();
    let date = $('#PicDate').val();
  
    // Make API call with selected rover and date
    makeAPICall(rover, date);
  }

// Define the NASA API endpoint and key
const apiEndpoint = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
const apiKey = '5YsKTo6bD3QOoi8sA3g4Hxzl6D2IXfzdiof3vMNk';

// Function to create the image gallery
function createGallery(images) {
  const galleryContainer = document.getElementById('galleryContainer');
  galleryContainer.innerHTML = '';

  // Create a grid of 5x5 images
  for (let i = 0; i < 25; i++) {
    const image = images[i];

    // Create a clickable image with a tooltip showing the camera name
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('imageContainer');
    const img = document.createElement('img');
    img.src = image.img_src;
    img.alt = image.camera.full_name;
    img.title = image.camera.name;
    img.addEventListener('click', () => {
      window.open(image.img_src, '_blank');
    });
    imgContainer.appendChild(img);
    galleryContainer.appendChild(imgContainer);
  }
}

// Function to make the API call and create the gallery
function searchPhotos(rover, date) {
  const url = `${apiEndpoint}/${rover}/photos?earth_date=${date}&api_key=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const images = data.photos;
      if (images.length > 0) {
        createGallery(images);
      } else {
        alert('No photos found for the selected date.');
      }
    })
    .catch(error => console.error(error));
}

// Function to handle form submission
function GoSearch() {
  const form = document.getElementById('myform');
  if (form.checkValidity()) {
    const rover = document.querySelector('input[name="rover"]:checked').value;
    const date = document.getElementById('PicDate').value;
    searchPhotos(rover, date);
  }
}

// Clear the form and gallery
function ClearForm() {
  const form = document.getElementById('myform');
  form.reset();
  const galleryContainer = document.getElementById('galleryContainer');
  galleryContainer.innerHTML = '';
}

// Functions to handle rover selection
function getCuriosity() {
  document.getElementById('PicDate').min = '2012-08-06';
  document.getElementById('PicDate').max = '2019-09-28';
}

function getOpportunity() {
  document.getElementById('PicDate').min = '2004-01-26';
  document.getElementById('PicDate').max = '2016-06-11';
}

function getSpirit() {
  document.getElementById('PicDate').min = '2004-01-05';
  document.getElementById('PicDate').max = '2004-03-21';
}

 
  
  
 
  
  // Function to clear form
  function ClearForm() {
    $('#myform')[0].reset();
    $('#galleryContainer').empty();
  }
  
  // Event listener for form submission
  $('#myform').submit(function(e) {
    e.preventDefault();
    GoSearch();
  });
  

function getCuriosity() {
    document.getElementById("PicDate").value = "2012-08-06";
}

function getOpportunity() {
    document.getElementById("PicDate").value = "2004-01-26";
}

function getSpirit() {
    document.getElementById("PicDate").value = "2004-01-05";
}
