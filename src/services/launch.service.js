const _url = 'https://api.spacexdata.com/v3/launches';

const getAllLaunches = () => {
    return fetch(_url).then(value => value.json())
};

export {getAllLaunches};