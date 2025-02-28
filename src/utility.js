const CONFIG = fetch('/config.json')
.then((response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then((data) => {
    return data
})
.catch((error) => {
    console.error('Error fetching config:', error);
    throw error;
});

export default CONFIG;