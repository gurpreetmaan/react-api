import './ghibliapi.css';

function App() {
	fetch('https://ghibliapi.herokuapp.com/films')
		.then((response) => {
			console.log(response, "response")
			return response.json()
		})
		.then((data) => {
			// Work with JSON data here
			// console.log('data', data)
			const movies = data.map(movie => {
				console.log('movie', movie)
				// return "hello";
				return (
					<div className="card">
						<h1>{movie.title}</h1>
						<p>{movie.description.substr(0, 300)}...</p>
					</div>
				)
			})

			console.log('list', movies)

			return movies;
		})
		.catch((err) => {
			console.log("error");
			// Do something for an error here
		})
	// const movieList="hsd";
	return (
		<div className="main-content">
			<img src="logo.png" alt="logo" />
			<div className="container"></div>
		</div>
	);
}

export default App;
