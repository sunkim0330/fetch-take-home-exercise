export default async function GET(req, res) {
  const url = "https://frontend-take-home-service.fetch.com";
  const { page = 1, breed, size, zipCodes } = req.query;

  try {
    const dogsResponse = await fetch(`${url}/dogs/search`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch {}
}
