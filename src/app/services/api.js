import fetch from 'node-fetch';



const defaultRequest = async () => {
    try {
        const response = await fetch('http://www.cbr.ru/s/newbik').then(res => res.buffer());
        return response
    } catch (error) {
        console.log(error);
    }
}

export {
    defaultRequest
}