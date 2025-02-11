import '../../assets/css/MainPage.css'

const MainPage = () => {
    return (
        <section className="section">
            <div className="main-container">
                {/* Left side */}
                <div className="text-main_left">
                    <h2>Welcome to Book Beacon</h2>
                    <p>At Book Beacon, we make finding your next great book effortless. Whether you're searching by author, title, or genre, our recommendation system helps you discover books tailored to your preferences. </p>
                    <h2>About Book Beacon</h2>
                    <p>Find books you will love and explore the vast collection. Leave reviews and share thoughts to track your reading journey. Discover nearby libraries to easily locate the books you need to start reading right away. Start your literary adventure today with Book Beacon!</p>
                    <p></p>
                </div>

                {/* Image right side */}
                <div className="img-container_right">
                    <img src="https://t4.ftcdn.net/jpg/00/05/86/25/240_F_5862533_wQ6IJRVm6vLtub3aqirHc0AsUK3EfloS.jpg" alt="Books" />
                </div>
            </div>
        </section >

    )
}
export default MainPage