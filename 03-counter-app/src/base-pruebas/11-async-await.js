export const getImagen = async () => {
    try {
        const apiKey = 'pGpGnrkwcTCAqf5T0Bw48UhJwquR8WST';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        return url;
    } catch (error) {
        // console.error(error)
        return 'No se encontro una URL'
    }
}

getImagen();



