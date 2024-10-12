// Async - await

const getImage = async () => {

  try {
    const apiKey = 'pGpGnrkwcTCAqf5T0Bw48UhJwquR8WST';
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await res.json();
    const { url } = data.images.original
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }
}
getImage();

