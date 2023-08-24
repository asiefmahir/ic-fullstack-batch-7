const baseURL = `http://localhost:5000/api`;

export const getAllProducts = async () => {
    const res = await fetch(`${baseURL}/products`);
    const data = await res.json();
    return data
}