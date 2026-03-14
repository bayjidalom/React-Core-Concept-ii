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

/**
 * 1. just write a simple feth with json conversion
 * 2.Wrap the data loading component under suspense
 */

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(date => console.log(data))


const loadData = async () => {
    const res = await fetch()
    const data = res.json()
    return data;
}