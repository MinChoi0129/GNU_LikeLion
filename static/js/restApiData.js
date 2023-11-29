
export class RestApiData{
    constructor(){


    }

    // post 페이지 불러오기
    getProjectData(){
        return new Promise((resolve,reject)=>{
            const apiUrl= 'http://127.0.0.1:8000/api/projects/?format=json'

            fetch(apiUrl)
            .then(response => response.json())
            .then(data=> {
                resolve(data);
            });
        });
    };

    // projects 페이지 불러오기
    getProjectData(){
        
        return new Promise((resolve,reject)=>{
            const apiUrl= 'http://127.0.0.1:8000/api/projects/?format=json'

            fetch(apiUrl)
            .then(response => response.json())
            .then(data=> {
                resolve(data);
            });
        });
    };
}



// restApiData.js 파일

const fetch = require('node-fetch');

function fetchData(url) {
    // API에서 데이터를 가져오는 로직
    console.log(`Fetching data from ${url}`);
    // 여기에 실제 데이터를 가져오는 코드를 추가할 수 있습니다.
}

async function postData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Posted data:', responseData);
        return responseData;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}

module.exports = {
    fetchData: fetchData,
    postData: postData,
};

