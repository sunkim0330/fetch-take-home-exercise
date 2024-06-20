export default async function GET(req, res) {
  const url = "https://frontend-take-home-service.fetch.com";

  try {
    const dogsResponse = await fetch(`${url}/dogs/search`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!dogsResponse.ok) {
      const error = await dogsResponse.json();
      console.log("response", dogsResponse);
      return res.status(dogsResponse.status).json({ message: error.message });
    }

    const data = await dogsResponse.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: "There was an error while fetching dogs",
    });
  }
}
