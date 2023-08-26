const baseURL = `http://localhost:5000/api`;

export const getAllOrders = async () => {
    const token = localStorage.getItem('token');
    return fetch(`${baseURL}/orders` , {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())

}
export const getOrderByUserId = async (id) => {
    const token = localStorage.getItem('token');
    return fetch(`${baseURL}/orders/${id}`, {
         headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(res => res.json())
}


export const createOrder = async (order) => {
    const token = localStorage.getItem('token');
    return fetch(`${baseURL}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
}

export const updateOrder = async (obj) => {
    const token = localStorage.getItem('token');
    const {status} = obj.payload;
    console.log(status, 'staus');
    return fetch(`${baseURL}/orders/${obj.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({status: status})
    })
        .then(res => res.json())
    
}

export const removeOrder = async (id) => {
    const token = localStorage.getItem('token');
    return fetch(`${baseURL}/orders/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}