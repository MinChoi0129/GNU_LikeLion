

export async function getProjectDataById(projectId) {
        const apiUrl = `http://127.0.0.1:8000/api/projects/${projectId}/?format=json`;
        
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching project data:', error);
          return null;
        }
      }

export async function getPostDataById(postid) {
const apiUrl = `http://127.0.0.1:8000/api/posts/${postid}/?format=json`;

try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
} catch (error) {
    console.error('Error fetching project data:', error);
    return null;
}
}
