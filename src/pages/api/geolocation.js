export default async function getLocation(req, res) {
  try {
    const locationRequest = await fetch(`http://ip-api.com/json/`);

    if (!locationRequest.ok) {
      throw new Error(
        `Failed to fetch location. Status: ${locationRequest.status}`
      );
    }

    const userLocation = await locationRequest.json();
    console.log("userLocation -->", userLocation);
    res.status(200).json(userLocation);
  } catch (error) {
    console.error("Error fetching location:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
