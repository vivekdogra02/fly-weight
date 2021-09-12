import axios from 'axios';
export async function getRocketsLaunched() {
    const url = `https://api.spacexdata.com/v3/launches`
    const { data } = await axios.get<any>(url)
    return data;
  }