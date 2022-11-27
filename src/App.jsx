import logo from "./images/logo_droplet/droplet_logo.png";
import background_img from "./images/obrobka.jpg";

function App() {
	return (
		<div className="main-grid">
			<header>
				<img className="logo" src={logo} alt="Droplet" />
				<nav className="nav">
					<a href="#" className="nav__link">
						O nas
					</a>
					<a href="#" className="nav__link">
						Kontakt
					</a>
				</nav>
			</header>

			<main>
				<h1 className="title">Usługi CNC - 5 osi</h1>
				<img src={background_img} alt="" className="primary-image" />
				<div className="secondary-images">
					<img
						src="img/little-1.jpg"
						alt=""
						className="secondary-image"
					/>
					<img
						src="img/little-2.jpg"
						alt=""
						className="secondary-image"
					/>
				</div>
				<p className="description">Opis DROPLETA... [UZUPEŁNIĆ]</p>
				<button className="btn">Skontaktuj się z nami</button>
			</main>

			<footer>
				<div className="social-links">
					<a href="#" className="social-link" aria-label="WhatsApp">
						<img
							src="img/snapchat-ghost.svg"
							alt="WhatsApp"
							className="social-img"
						/>
					</a>
					<a href="#" className="social-link" aria-label="instagram">
						<img
							src="img/instagram.svg"
							alt="instagram"
							className="social-img"
						/>
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
