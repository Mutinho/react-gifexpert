export const getGifs = async(category) =>{

    const apiKey = 'wEthJUOOtXmZwJEOsPTYd3SQ2ZkfXMs2';
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&api_key=${apiKey}&q=${category}`;
    const resp = await fetch(url);
    const {data = []} = await resp.json();
    const gifs = data.map( img => ({
      id : img.id,
      title : img.title,
      url : img.images.downsized_medium.url
    }));
        
    return gifs;
    
}