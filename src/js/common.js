const hostName = 'X-API-KEY';
const hostValue = 'bc44c90c-0245-4354-aa9c-a6ce5d0a5edd';
const fOpen = async (url) => {
    let res = await fetch(url, {
        headers: {
            [hostName]: hostValue,
            'Content-Type': 'application/json',
        }
    });
    if (res.ok) return res.json();
    else throw new Error(`Cannot access to ${url}`);
}
export default fOpen;