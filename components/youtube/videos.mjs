const baseUrl = `https://www.googleapis.com/youtube/v3`;
const apiKey = process.env.YOUTUBE_API_KEY;

async function getSearchedVideos(searchedQuery) {
  let reqdUrl = `${baseUrl}/search?key=${apiKey}&part=snippet&q=${searchedQuery}&maxResults=7`;
  let response = await fetch(reqdUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
}

export default {
  getSearchedVideos,
};
