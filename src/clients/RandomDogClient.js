import axios from 'axios';

const consumirApi = async () => {
    const resp = await axios.get('https://dog.ceo/api/breeds/image/random').then(r => r.data);
    console.log(resp);
    return resp;
};

export async function consumirApiFacade() {
    return await consumirApi();
}