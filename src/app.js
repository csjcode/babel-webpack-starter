import { person, sayHello } from './lib';

// alert(sayHello('Chris'));

async function getPosts(params) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await response.json();
    return data;
}

getPosts().then(posts=> console.log(posts));