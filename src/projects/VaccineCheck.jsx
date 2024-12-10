// src/projects/VaccineCheck.jsx
import Carousel from "../components/Carousel";
import scanImage from "../assets/images/vaccinecheck/scan.png";
import travelImage from "../assets/images/vaccinecheck/travel.png";
import vaccineCertImage from "../assets/images/vaccinecheck/vaccine_cert.png";

const VaccineCheck = () => {
    const images = [vaccineCertImage, travelImage, scanImage];

    return (
        <div
            className="flex flex-col md:flex-row items-center justify-center border-2 border-gray-300 p-4 rounded-lg mb-8">
            <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-2">VaccineCheck</h2>
                <p className="text-1xl font-custom">
                    <strong>My Idea:</strong> The idea of VaccineCheck first came up when I wanted to travel to
                    South-East Asia for a couple of months and collect some experience as a digital nomad. I wanted to
                    make sure that I had all the vaccinations I would need for my travel purposes. I had some stickers
                    of the brand of the vaccine in my vaccination certificate, so I had to check online which
                    vaccinations I already had and which ones I would need. Usually, you can go to the doctor, and he
                    will give you advice. But making an appointment, waiting a couple of weeks, and then getting the
                    same information that is public anyways was a pain for me, so I developed this app that gives me all
                    recommendations with just a photo of my vaccination certificate.
                    <br/><br/>
                    <strong>The Vaccination Certificate Page:</strong> See all your vaccinations digitalized. It
                    contains all the information that you need: the brand of your vaccine, for what disease it is, and
                    the date you received the vaccination.
                    <br/><br/>
                    <strong>The Travel Page:</strong> Select your travel destination, and your digitalized vaccinations
                    will match those required or recommended for the respective country. The information was collected
                    from the CDC, which provides vaccination recommendations for the US.
                    <br/><br/>
                    <strong>The Scan Page:</strong> This is where the magic happens. You take a photo of each page of
                    your vaccination certificate, and the AI recognizes every entry. If, for example, the vaccination
                    against a gap is not filled, it can tell by the sticker what it is. The date will be formatted in a
                    consistent way, and if any data is not correctly read, an alert shows up, and it can be corrected
                    directly.


                </p>
            </div>
            <div className="md:w-1/2 p-4">
                <Carousel images={images}/>
            </div>
        </div>
    );
};

export default VaccineCheck;
