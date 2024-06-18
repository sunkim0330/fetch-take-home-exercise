export default async function POST(req, res) {
  const { name, email } = req.body;
  const url = "https://frontend-take-home-service.fetch.com";
  try {
    const loginResponse = await fetch(`${url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
