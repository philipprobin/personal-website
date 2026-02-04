// eslint-disable-next-line no-unused-vars
import React from 'react';
import tractionImage from '../src/assets/images/books/traction.jpg';
import breatheImage from '../src/assets/images/books/breathe.jpg';

function Books() {
    return (
        <div>
            <h1 className="text-3xl font-customBold text-left mb-8">Books I read</h1>

            <h2 className="text-2xl font-customBold p-4">Breath by James Nestor</h2>
            <div className="book flex flex-col md:flex-row text-left">
                <img
                    src={breatheImage}
                    alt="Breathe by James Nestor"
                    className="w-32 md:w-40 lg:w-48 h-auto mb-4 md:mb-0 md:mr-4"
                />
                <div>
                    <p>
                        Breath explains how modern society lost the wisdom from forgotten eastern cultures on breathing techniques that help maintaining a good health and fitness. Nestor explains from his personal experiences and conversations with &quot;pulmonauts&quot;, as he calls them, how people in the modern world unlearned breathing properly which lead to many respiratory health issues like astma, allergies, snorring and sleep apnea.
                        <br /><br />
                        Nestor starts the book by describing a self-experiment by cloggin his nostrils and mouth breating for ten days.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-customBold p-4">Traction by Gabriel Weinberg</h2>
            <div className="book flex flex-col md:flex-row text-left">
                <img
                    src={tractionImage}
                    alt="Traction by Gabriel Weinberg"
                    className="w-32 md:w-40 lg:w-48 h-auto mb-4 md:mb-0 md:mr-4"
                />
                <div>
                    <p>
                        This book is great for founders, who are seeking guidance when it comes to getting the attention of potential customers. Gabriel Weinberg, the founder of DuckDuckGo, explains first the concept of the bulls-eye framework, which helps you brainstorm first ideas on how you could potentially reach out to clients (the outer ring). From there, you need to think about the costs, the size of the outreach and the kind of customers you would target to prioritize which ideas are worth testing. He introduces 19 potential traction channels and gives some ideas on how to utilize them best.
                        <br /><br />
                        In my opinion, this book is a perfect fit if you already have some proof of concept and want to start accelerating your business. It highlights the importance of the creative brainstorming experience and gives very good examples of how other startups succeeded with different strategies. However, some parts of the book feel old. It does not really cover modern marketing channels like social media, and some of the tools mentioned are no longer available.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Books;
