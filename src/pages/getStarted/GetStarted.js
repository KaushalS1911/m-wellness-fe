import React, {useState} from 'react';
import GetStartedReview from "../../components/getstarted/GetStartedReview";
import GetStarted2 from "../../components/getstarted/GetStarted";


function GetStarted(props) {
    const [points1, setPoints1] = useState([])
    return (
<>
            <GetStarted2  />
    <GetStartedReview />
</>
    );
}

export default GetStarted;