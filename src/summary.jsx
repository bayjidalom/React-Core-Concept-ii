/**
 * Componenet 
 * JSX
 * Props
 * Conditional Rendering
 * Events
 * State
 * ** API ---
 */

/**
 * get api
 * make api -- after some module
 * 
 */

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(date => console.log(data))


const loadData = async () => {
    const res = await fetch()
    const data = res.json()
    return data;
}