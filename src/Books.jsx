import React from 'react';
import breatheImage from '../src/assets/images/books/breathe.jpg';

function Books() {
    return (
        <div>

            <h1 className="text-3xl font-customBold text-left mb-8">Books I read</h1>
            {/* Add your book list here */}

            <h2 className="text-2xl font-customBold p-4">Breath by James Nestor</h2>
            <div className="book flex text-left">

                <img src={breatheImage} alt="Breathe by James Nestor" className="w-1/3 h-auto mr-4" />
                <div>
                    <p>
                        Breath explains how modern society lost the wisdom from forgotten eastern cultures on breathing techniques that help maintaining a good health and fitness. Nestor explains from his personal experiences and conversations with 'pulmonauts", as he calls them, how people in the modern world unlearned breathing properly which lead to many respiratory health issues like astma, allergies, snorring and sleep apnea. 
                        <br></br>Nestor starts the book by describing a self-experiment by cloggin his nostrils and mouth breating for ten days. 
                    </p>
                </div>
            </div>


        </div>
    );
}

export default Books; 