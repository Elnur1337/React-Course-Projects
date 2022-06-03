import React, {useState, useEffect} from 'react';
import Tour from './Tour';

const ToursList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const getData = async() => {
        const respons = await fetch('https://course-api.com/react-tours-project');
        const data = await respons.json();
        setIsLoading(false);
        setData(data);
    }
    useEffect(() => {
        getData();
    }, []);
    const removeTour = (id) => {
        const newData = data.filter((tour) => tour.id !== id);
        setData(newData);
    }
    return (
        <>
        {isLoading ? <h2>Loading...</h2> : (
            data.map((tour) => {
                return (
                    <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                );
            })
        )}
        </>
    );
}
export default ToursList;