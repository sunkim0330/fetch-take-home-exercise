export default async function POST() {
  const url = "https://frontend-take-home-service.fetch.com";
  try {
    const loginResponse = await fetch(`${url}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
