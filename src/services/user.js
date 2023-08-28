const baseURL = `http://localhost:5000/api`;

export const getAllUsers = async () => {
    const token = localStorage.getItem('token');

    const res = await fetch(`${baseURL}/users`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    const data = await res.json();
    return data
}

export const getUserById =  async (id) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${baseURL}/users/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await res.json();
    return data
}

export const updateUser = async (user) => {
    delete user.obj._id;

    const payload = {
        ...user.obj,
        role: 'admin'
    }

    const token = localStorage.getItem('token');

    return fetch(`${baseURL}/users/${user.id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
}

export const removeUser = async (id) => {
    const token = localStorage.getItem('token');

    return fetch(`${baseURL}/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}