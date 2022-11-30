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
				<h1 className="title">Usługi CNC</h1>
				<h2 className="subtitle">
					5 osiowe CNC <br></br> Drewno, Laminat, MDF
				</h2>
				<img src={background_img} alt="" className="primary-image" />
				{/* <div className="secondary-images">
					<img
						src={background_img}
						alt=""
						className="secondary-image"
					/>
					<img
						src={background_img}
						alt=""
						className="secondary-image"
					/>
				</div> */}
				<p className="description">
					Oferujemy usługi frezowania, wykonywane na 5-osiowym centrum
					frezującym do drewna.
					<ul>
						<li>
							Wykonujemy zarówno proste zlecenia, takie jak
							frezowanie frontów, gniazd pod żywicę w blatach
							drewnianych, jak i skomplikowane geometrie m.in.
							płaskorzeźby na drewnianych drzwiach, złożone
							geometrie trójwymiarowe czy choćby formy do
							laminatów.
						</li>
						<li>
							Paleta możliwych do wykonania elementów jest
							praktycznie nieograniczona i zależy tylko od
							pomysłowości klienta.
						</li>
						<li>Pole robocze maszyny: 2400 x 1300 x 300 [mm]</li>
						<li>
							Materiały obrabiane: drewno, materiały
							drewnopochodne, tworzywa sztuczne, laminaty i nie
							tylko!
						</li>
					</ul>
					<span className="span__break">
						Z uwagi na duże doświadczenie w branży obróbki
						skrawaniem, oraz realizacji wielu nietypowych zleceń,
						nie boimy się wyzwań.{" "}
					</span>
					<span className="span__break">
						Możliwa współpraca wysyłkowa!
					</span>{" "}
					<span className="span__break">
						Zapraszamy do przesyłania zapytań ofertowych.
					</span>
				</p>
				<button className="btn">Skontaktuj się z nami</button>
			</main>

			<footer>
				<div className="contact-details">
					<span className="contact-details-title">
						DANE KONTAKTOWE
					</span>
					<p>Telefon: +48 691 32 59 88</p>
					<p>E-mail: biuro@cnc5osi.pl</p>
					<p>
						<strong>Droplet Sp. z o.o.</strong>
					</p>
					<p>ul.Światowida 2 (hala nr 6-7)</p>
					<p>46-020 Opole</p>
				</div>
				{/* <div className="social-links">
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
				</div> */}
			</footer>
		</div>
	);
}

export default App;
