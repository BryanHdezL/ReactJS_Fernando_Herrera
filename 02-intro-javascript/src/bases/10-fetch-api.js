// Fetch API

// API Key
const apiKey = 'pGpGnrkwcTCAqf5T0Bw48UhJwquR8WST';

// Peticion
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
  .then((res) => res.json())
  .then(({ data }) => {
    const { url } = data.images.original
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn)