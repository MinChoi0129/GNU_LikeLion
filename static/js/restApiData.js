
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