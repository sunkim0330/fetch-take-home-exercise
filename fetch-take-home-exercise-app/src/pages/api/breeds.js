export default async function GET(req, res) {
  const url = "https://frontend-take-home-service.fetch.com";
  try {
    const breedResponse = await fetch(`${url}/dogs/breeds`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    return res.status(200).json({ breedResponse });
  } catch {
    return res.status(500).json({
      message: "There was an error while fetching breeds information",
    });
  }
}
