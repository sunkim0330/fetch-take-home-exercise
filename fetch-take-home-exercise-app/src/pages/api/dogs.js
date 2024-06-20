export default async function POST(req, res) {
  const url = "https://frontend-take-home-service.fetch.com";
  try {
    const dogsResponse = await fetch(`${url}/dogs`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch {}
}
