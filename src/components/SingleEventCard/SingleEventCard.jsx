import { useParams } from "react-router-dom";

const SingleEventCard = () => {
const {id} = useParams();
console.log(id);
    return (
        <div>
            i am single
        </div>
    );
};

export default SingleEventCard;