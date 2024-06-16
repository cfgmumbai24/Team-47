import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const GoatCard = (props) => {
    const { username } = useParams();
    return (
        <Link to = {`/user/${username}/${props.pId}/${props.id}`}>
            <div className="container mx-auto px-5 py-10 md:py-14">
                {/* main */}
                <div className="flex justify-center flex-wrap -m-4 text-center">
                    {/* Track 1 */}
                    <div className="p-4 cursor:pointer md:w-1/2 sm:w-1/2">
                        <div className="border-2 shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 px-4 py-6 rounded-lg">

                            <h2 className="title-font font-medium text-lg text-gray-900">
                                {props.name}
                            </h2>
                            <p className="leading-relaxed">
                                Goat Palak Id: {props.pId}
                            </p>
                        </div>
                    </div>

                    {/* Track 2 */}
                    <div className="p-4 md:w-1/2 sm:w-1/2">
                        <div className="border-2 hover:shadow-xl w-max hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">

                            <h2 className="title-font font-medium text-lg text-gray-900">
                                Gender: {props.gender}
                            </h2>
                            <h2 className="title-font font-medium text-lg text-gray-900">
                                Date of Birth: {props.dob}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
         </Link>
    );
}

export default GoatCard;