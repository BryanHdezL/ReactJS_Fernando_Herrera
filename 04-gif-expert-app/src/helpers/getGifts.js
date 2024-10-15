export const getGifts = async (category) => {
	const limit = 5
	const api_key = 'n7h0xQECJUM2OQECmvhPUqLgOLkXbTQh'
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`

	const resp = await fetch(url)
	const { data } = await resp.json()

	const gifts = data.map(img => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url
	}))

	return gifts
}