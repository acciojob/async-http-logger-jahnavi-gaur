//your JS code here. If required.
async function fetchData(){
	const res = fetch('https://jsonplaceholder.typicode.com/todos/1')
	const data = await res.json()
	console.log(data.title)
}