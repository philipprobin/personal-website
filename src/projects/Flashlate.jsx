// src/projects/Flashlate.jsx
import Carousel from "../components/Carousel";
import mainImage from "../assets/images/flashlate/main.png";
import conjugateImage from "../assets/images/flashlate/conjugate.png";
import practiceImage from "../assets/images/flashlate/practice.png";
import communityImage from "../assets/images/flashlate/community.png";
import personalImage from "../assets/images/flashlate/personal.png";

const Flashlate = () => {
    const images = [mainImage, conjugateImage, practiceImage, communityImage, personalImage];

    return (
        <div
            className="flex flex-col md:flex-row items-center justify-center border-2 border-gray-300 p-4 rounded-lg mb-8">
            <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-2">Flashlate</h2>
                <p className="text-1xl font-custom">
                    <strong>My Idea:</strong>
                    During my student exchange at the UPB in Medellín (Colombia), I had a lot of time during the week
                    because my courses were only on weekends. I only had my Spanish course for 1.5 hours a day. While
                    studying Spanish, I felt like there was no app that could meet all my needs. There was Translate for
                    translations, Anki for flashcards, and Reverso for conjugations. As a mobile developer with plenty
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    of time and this pain point, I created my own app: Flashlate. It's a mix of the words flashcards and
                    translate. Flashlate is a translate application that combines translations, flashcards, overviews,
                    and conjugations—all in one app. This is definitely the app I personally used the most. I created
                    over 20 decks for practicing Spanish, improving English, and learning basic French and Vietnamese.
                    Unfortunately, I could not publish the app on the Apple App Store because of *Design: Spam*,
                    whatever that means...
                    <br/><br/>

                    <strong>The Main Page:</strong>
                    The user can type a word into any field, and it gets directly translated into the other language. If
                    a conjugation of a verb appears in the target field, it is recognized, and a conjugate button
                    appears. (I used the spaCy library for that.)
                    <br/><br/>

                    <strong>The Conjugation Page:</strong>
                    The user can view all possible translations of a verb, with the most utilized tenses displayed. (I
                    scraped some websites for this data.)
                    <br/><br/>

                    <strong>The Practice Page:</strong>
                    The user can train their memory skills using a simple flashcard algorithm. Once all cards are marked
                    as either known or unknown, the user can choose to practice the unknown cards again or restart with
                    all cards.
                    <br/><br/>

                    <strong>The Personal Decks Page:</strong>
                    The user gets an overview of all created decks and their cards. They can also create a new deck
                    here. (I enjoyed naming decks after the places I was currently in.)
                    <br/><br/>

                    <strong>The Community Decks Page:</strong>
                    I used a dataset of transcriptions from TED Talks on Kaggle to identify the most frequently used
                    adjectives, verbs, and nouns in a language. From this, I created translations using ChatGPT. This
                    process was quite time-consuming, so I could only support a few languages. However, I was able to
                    generate a ranking of the top 500 most-used words for each category, which is great for anyone
                    starting to learn a new language.

                </p>
            </div>
            <div className="md:w-1/2 p-4">
                <Carousel images={images}/>
            </div>
        </div>
    );
};

export default Flashlate;
