export const getGifs = async (category) => {
  const api = "6UzbwP9zb8v5a6n0koIChEGJAJb1s2w0";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
