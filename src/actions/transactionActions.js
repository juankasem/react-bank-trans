export const insert = data =>{
    return {
        type : 'INSERT',
        payLoad : data
    }
}

export const update = data =>{
    return {
        type : 'UPDATE',
        payLoad : data
    }
}

export const Delete = index =>{
    return {
        type : 'DELETE',
        payLoad : index
    }
}

export const updateIndex = index =>{
    return {
        type : 'UPDATE-INDEX',
        payLoad : index
    }
}