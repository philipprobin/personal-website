// App.js

import "./App.css";
import myImage from "./assets/images/me.jpg";
import gitHubLogo from "./assets/images/github.png";
import linkedInLogo from "./assets/images/linkedin.png";
import communityImage from "./assets/images/flashlate/community.jpg";
import conjugateImage from "./assets/images/flashlate/conjugate.jpg";
import mainImage from "./assets/images/flashlate/main.jpg";
import personalImage from "./assets/images/flashlate/personal.jpg";
import practiceImage from "./assets/images/flashlate/practice.jpg";
import {useState} from "react";
import {useSwipeable} from "react-swipeable";

function App() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [mainImage, conjugateImage, practiceImage, communityImage, personalImage,];

    const handleIndicatorClick = (index) => {
        setCurrentImageIndex(index);
    };

    // Swipe handlers
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length),
        onSwipedRight: () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length),
    });



    return (
        <>
            <div className="flex justify-center overflow-hidden mb-8">
                <img
                    className="rounded-full h-52 w-52 object-cover"
                    src={myImage}
                    alt="Description of the image"
                />
            </div>

            <div className="text-3xl font-customBold mb-2">
                <h1>Hi, I am Philipp</h1>
            </div>
            <div className="text-1xl text-center flex justify-center font-custom">
                <p>
                    I am a Software Developer interested in AI and Entrepreneurship.
                    <br/>
                    I love developing apps and exploring new things. <br/>
                    Currently I am nomading in Vietnam and working on my Start-up SemanticMap and some side projects
                    while
                    learning Vietnamese. <br/>I enjoy exploring various cultures and
                    engaging in games like chess and basketball.
                </p>
            </div>

            <div className="text-3xl font-customBold mt-8 mb-2">
                <h1>These are my priorities:</h1>
            </div>
            <div className="text-1xl text-left flex justify-center font-custom">
                <ul className="md:ml-14" style={{listStyleType: "disc", paddingLeft: "1.5rem"}}>
                    <li>Create value</li>
                    <li>Fail fast</li>
                    <li>Dive into electronic music production</li>
                    <li>Make a living from my ideas</li>
                </ul>
            </div>

            <div className="text-3xl mt-8 mb-2 font-customBold">
                <h1>These are my values:</h1>
            </div>
            <div className="text-1xl text-left flex justify-center mb-8 font-custom">
                <ul className="md:ml-14" style={{listStyleType: "disc", paddingLeft: "1.5rem"}}>
                    <li>Having a sustainable impact on society with the work I do</li>
                    <li>Striving for personal growth and happiness</li>
                    <li>Being always open-minded and curious</li>
                    <li>Pursuing lifelong learning</li>
                </ul>
            </div>

            <div className="text-3xl mt-8 mb-2 font-customBold">
                <h1>My Projects:</h1>
            </div>

            {/* Flashlate Project Section with Carousel */}
            <div
                className="flex flex-col md:flex-row items-center justify-center border-2 border-gray-300 p-4 rounded-lg mb-8">
                <div className="md:w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-2">Flashlate</h2>
                    <p className="text-1xl font-custom">
                        <strong>My Idea:</strong> During my student exchange at the UPB in Medellín (Colombia) I had a
                        lot of time during the week, because my courses were only on the weekend. I only had my spanish
                        course for 1.5h a day. While I was studying spanish, I felt like there was no App, that I could
                        use for all my needs I had. There was Translate for all the translations, Anki for flashcards
                        and Reverso for conjugations. As a mobile dev with much time and this pain I created my own App:
                        Flashlate. Its a mix of the words flashcards and translate.Creating a
                        translate application that combines translations, flashcards, overviews, and conjugations—all in
                        one app. This App is definitely the one that I personally used most. I created over 20 decks for
                        practicing spanish, improving on english and learning basics french and vietnamese.
                        Unfortunately I could not publish the app on the Apple App Store, because the *Concept and

                        design is to similar to other apps* whatever this means...
                        <br/><br/>
                        <strong>The Main Page:</strong> The user can type in any field a word and it gets directly
                        translated into the other language. If any conjugation of a verb appears in the target field, it
                        gets recognized and a conjugate button appears. (I used the spacy lib for that)
                        <br/><br/>

                        <strong>The Conjugation Page:</strong> The user can see all of the possible translations of that
                        verb and the most utilized tenses are displayed (I scraped some websites for that)
                        <br/><br/>
                        <strong>The Practice Page:</strong> The user can train their memory skills using a simple
                        flashcard algorithm. Once all cards are marked as either known or unknown, the user can choose
                        to practice the unknown cards again or start again with all cards.
                        <br/><br/>
                        <strong>The Personal Decks Page:</strong> The user gets an overview of all decks with all cards
                        created and can also create a new deck here. (I liked to create a deckname by the place I am
                        currently at)
                        <br/><br/>
                        <strong>The Community Decks Page:</strong> Here I used a dataset of transcriptions from TedTalks
                        on Kaggle to identify the most used adjectives, verbs and nouns in a language. From that I
                        created the translations with ChatGPT. This process was quite time consuming, so I could only
                        support some languages. I could create a ranking of the top 500 used words of every kind, which
                        is quite nice to know if you want to start learning a new language.
                    </p>
                </div>

                {/* Carousel Section */}
                <div className="md:w-1/2 p-4 flex flex-col items-center" {...swipeHandlers}>
                    <div
                        className="overflow-hidden rounded-lg shadow-lg lg:h-[48rem] md:h-[40rem] sm:h-[24rem] xs:h-[16rem] w-auto">

                        <img src={images[currentImageIndex]} alt="Flashlate App Preview"
                             className="h-full w-full object-cover"/>
                    </div>
                    {/* Indicators */}
                    <div className="flex space-x-2 mt-4">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleIndicatorClick(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer ${currentImageIndex === index ? "bg-black" : "bg-gray-400"}`}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-l font-customBold mt-8 mb-6">
                <h1>Last update: 07. Nov 2024</h1>
            </div>
            <div className="flex justify-center">
                <div className="p-4 hover:bg-gray-100 duration-200">
                    <a target="_blank" href="https://github.com/philipprobin" rel="noreferrer">
                        <img className="h-16 w-16" src={gitHubLogo} alt="GitHub Logo"/>
                    </a>
                </div>
                <div className="p-4 hover:bg-gray-100 duration-200">
                    <a target="_blank" href="https://www.linkedin.com/in/philipp-sowik-7462b4215/" rel="noreferrer">
                        <img className="h-16 w-16" src={linkedInLogo} alt="LinkedIn Logo"/>
                    </a>
                </div>
            </div>
        </>
    );
}

export default App;
