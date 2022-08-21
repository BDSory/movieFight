//omdbapi key: http://www.omdbapi.com/?i=tt3896198&apikey=a054053a
//a054053a
const fetchData = async (searchTerm) => {
    const response = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: 'a054053a',
            s: searchTerm
        }
    });
    console.log(response.data);
}

const input = document.querySelector('input')

let timeoutId;
const onInput = event => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 1000);
};    
    
input.addEventListener('input', onInput);