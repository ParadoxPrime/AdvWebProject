//Top 5 movies
let topMovies = [{id: 0, title: "The The Shawshank Redemption", year: 1994, price: 9.9,
  		image_url: "https://www.filmsite.org/posters/shawshankredemption.jpg"},
	{id: 1, title: "The Godfather", year: 1992, price: 19.9,
      image_url: "https://media.timeout.com/images/105455970/750/562/image.jpg"},
	{id: 2, title: "The Dark Knight", year: 2008, price: 29.9,
     image_url: "https://upload.wikimedia.org/wikipedia/sco/8/8a/Dark_Knight.jpg"},
	{id: 3, title: "Star Wars", year: 1977, price: 39.9,
     image_url: "https://media.timeout.com/images/105456000/750/562/image.jpg"},
	{id: 4, title: " Schindler\'s List", year: 1993, price: 49.9,
     image_url: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"},
];

//----------------------------------------
//Slideshow: Manual
let slideIndex = 0;//Initial slide = 0
const nextSlide = () => {
	//Change the slide_index
  slideIndex < topMovies.length - 1 ? slideIndex++ : (slideIndex = 0);
	//Change the title, year and image source accordingly
	document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
  document.getElementById("manual-slide-year").innerHTML = topMovies[slideIndex].year;
	document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;	
}

const previousSlide = () => {
	//Change the slide_index
  slideIndex > 0 ? slideIndex-- : (slideIndex = topMovies.length - 1);
	//Change the title, year and image source accordingly
	document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
	document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url;		
}

//------------------------------------------------
//Slideshow: Automatic
let autoSlideIndex = 0;

let autoSlideShow = () => {
//Change the slide_index
	if (autoSlideIndex < topMovies.length - 1) {
		autoSlideIndex++;
	} else {
		autoSlideIndex = 0;
	}
	//Change the title, year and image source accordingly
	document.getElementById("auto-slide-title").innerHTML = topMovies[autoSlideIndex].title;
  document.getElementById("auto-slide-year").innerHTML = topMovies[autoSlideIndex].year;
	document.getElementById("auto-slide-image").src = topMovies[autoSlideIndex].image_url;
	//Wait 2 seconds
	setTimeout(autoSlideShow, 2000);//Auto change slide every 2 seconds
}
autoSlideShow();


//----------------------------------------
//Slideshow: Customization

//Use Local Storage API to store and retrieve the above preferences: bg-color & font-size
      //On client side and store it permanently
      //Read more: LocalStorage API: https://www.w3schools.com/jsref/prop_win_localstorage.asp 
      //------------------------------------------
      // Load saved preferences
      if (localStorage.getItem("color_preference") != null) {
        document.getElementById("demo1card").style.backgroundColor = localStorage.getItem("color_preference");
      }

      //Change background color and save    
      const changeColor = () => {
        //Get the selected color
        let selectedBGColor = document.getElementById("colorOption").value;
        //Change the background color accordingly
        document.getElementById("demo1card").style.backgroundColor = selectedBGColor;  
        //Store this selected color locally & permanently on client side            
        localStorage.setItem("color_preference", selectedBGColor);                             
      }   


      //------------------------------------------
      // Load saved preferences
      if (localStorage.getItem("size_preference") != null) {
        document.getElementById("demo1card").style.fontSize = localStorage.getItem("size_preference");
      }       


      //Change text size and save
      const customizeText = () => {
        let selectedTextSize = document.getElementById("sizeOption").value;
        document.getElementById("demo1card").style.fontSize = selectedTextSize;
        localStorage.setItem("size_preference", selectedTextSize);  
      }   


      //------------------------------------------
      //------------------------------------------
      //load color theme: dark mode or light mode
      const savedTheme = localStorage.getItem('themePreference') || 'light';
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').checked = true;
      }
      //Toggle between Dark mode and Light mode
      const toggleMode = () => {
        let theme = themeToggle.checked ? 'dark' : 'light';
        theme === 'dark' ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
        localStorage.setItem('themePreference', theme);       
      }
