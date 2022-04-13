AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Development Intern",
    cardImage: "assets/images/experience-page/internshipstudio.jfif",
    place: "Internship Studio",
    time: "(Jan, 2022 - Feb,2022)",
    desp: "<li>Worked on enhancing my skills in web development.</li> <li>I learned a lot from this internship, it was a very good experience in making real world projects.</li> <li>Finally I created an E-commerce Shopping website using HTML, CSS, Javascript and Bootstrap.</li>",
  },
  {
    title: "Student Developer",
    cardImage: "assets/images/experience-page/google-cloud.jpg",
    place: "Google Cloud Training",
    time: "(Mar - Aug, 2021)",
    desp: "<li>Worked on Google Cloud Platform as a part of Google Cloud Ready Facilitator Program.</li><li>Worked on new technologies in this whole duration like kubernetes, cloud architecture, devops, blockchain, etc.</li><li>All this tasks in google platform are used to do in Qwiklabs within a given time limit.</li>",
  },
  {
    title: "Student Developer",
    cardImage: "assets/images/experience-page/Google-Digital-Garage-img.png",
    place: "Digital Marketing",
    time: "(Jun, 20 - July, 20)",
    desp: "<li>Learnt about digital marketing being a part of Google.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "National Engineering Olympiad 2021",
    cardImage: "assets/images/experience-page/download.png",
    description:
      "Successfully qualified the round one with a good score.",
  },
  {
    title: "Google Cloud Platform",
    cardImage: "assets/images/experience-page/google-cloud.jpg",
    description:
      "Earned ultimate milestones in Google Cloud Ready Program in which I have got free access to GCP for a year and some swags like google T-shirt, Hand Bag, Laptop Bag, google cloud pen,badge and a certificate from Google.",
  },
  {
    title: "Coursera",
    cardImage: "assets/images/experience-page/coursera.png",
    description:
      "Earned Honors course certificate in Programming Foundation with Javascript, HTML and CSS.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
