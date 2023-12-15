export default async function getLocation(req, res) {
    const locationRequest = await fetch(
      `http://ip-api.com/json/`
    );
    const userLocation = await locationRequest.json();
    console.log('userLocation -->', userLocation)
    res.status(200).json(userLocation);
  }
  