


                        /* Fetch &  async await */



// 1. fetch api
fetch('url')
    .then(response => response.json())
    .then(data => console.log(data));


// 2. async await:-
const asyncAwait = async () => {
    const url = `url`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
};          







