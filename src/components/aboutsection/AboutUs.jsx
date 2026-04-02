import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-2xl md:text-5xl font-bold text-red-600 mb-6">About Us</h2>

                {/* Paragraphs */}
                <div className="text-gray-800 text-md md:text-xl leading-relaxed space-y-4 text-justify">
                    <p>
                        <span className="font-bold">AB Cricket Development Academy</span> has state of the art facility, featuring a
                        cricket ground with 21 practice pitches in the ground, 3 grounds to
                        play matches and for open nets on a daily basis and a well equipped
                        Gym. We run summer camps, annual camps, high performance camps for
                        professional players led by a team of qualified coaches under the
                        supervision of experienced BCCI/NCA certified head coaches.
                    </p>

                    <p>
                        The academy also facilitates net rental, ground rental for
                        individuals, professional cricketers, professional teams, state
                        teams and corporates. The academy also gives scholarships for state
                        players with zero fees and to those players who perform in the matches,
                        to get the scholarship batter has to score 5 hundreds in the season and
                        bowler has to take 5 times five wicket hauls. There are many more facilities
                        like bowling machines etc. We have given more than{" "}
                        <span className="font-bold">30 state and national players</span>.
                    </p>

                    <p className="font-bold">
                        We believe in result oriented practice.
                    </p>

                    <p>
                        We do not believe in the saying practice makes you perfect whereas we believe in{" "}
                        <span className="italic font-bold">
                            “PERFECT PRACTICE MAKES YOU PERFECT”
                        </span>
                    </p>
                </div>

                {/* Image */}
                <div className="mt-6">
                    <img src="src\Assets\player.jpg" alt="academy" className="w-full h-56 md:h-72 object-cover rounded-md"/>
                </div>

                {/* Extra Text */}
                <p className="mt-4 text-gray-700 text-md md:text-xl text-justify">
                    We believe in giving equal opportunity to all and in the same way we
                    give training to girls also. Our academy girls are doing great and
                    getting chances to play in all types of tournaments.
                </p>

                {/* Mission / Vision / Uniqueness */}
                <div className="mt-8 grid grid-cols-1 text-md md:text-xl md:grid-cols-3 gap-6 text-left">

                    {/* Mission */}
                    <div>
                        <h3 className="font-bold underline mb-2">Mission</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To develop in every player an active and positive mind, a sense of
                            understanding and compassion for the game and the courage to act
                            on their beliefs. We stress the total development of each child:
                            spiritual, moral, intellectual, social, emotional and physical development.
                        </p>
                    </div>

                    {/* Vision */}
                    <div>
                        <h3 className="font-bold underline mb-2">Vision</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To provide a stimulating learning environment with correct coaching
                            techniques which maximises individual potential and ensures that
                            players of all ability levels are well equipped to meet the
                            challenges of the game of cricket.
                        </p>
                    </div>

                    {/* Uniqueness */}
                    <div>
                        <h3 className="font-bold underline mb-2">Uniqueness</h3>

                        <div className="max-h-60 md:max-h-72 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                            <ul className="text-gray-700 space-y-2 list-disc list-inside pl-6">
                                <li>We have 3 match grounds and 21 practice pitches.</li>
                                <li>Qualified professional coaches.</li>
                                <li>Strength & conditioning coach available.</li>
                                <li>Well equipped gym for players.</li>
                                <li>Most state & national players from the city.</li>
                                <li>Seven registered cricket clubs in Lucknow.</li>
                                <li>Practice facilities available in rainy season.</li>
                                <li>Bowling machines available.</li>
                                <li>Weekend & holiday matches provided.</li>
                                <li>Variety of pitches, rollers & pitch covers.</li>
                                <li>Visits from national & international players.</li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div className="w-full mt-10 pt-4 border-t border-gray-500 text-right">
                    <p className="text-md md:text-xl text-gray-600 hover:text-red-400 cursor-pointer transition">Check & Mate e tech Solution
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;