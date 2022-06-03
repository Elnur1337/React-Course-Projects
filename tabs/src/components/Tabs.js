import React, {useState, useEffect} from 'react';
import TabDetails from './TabDetails';

const Tabs = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [jobShown, setJobShown] = useState({});
    const classHandler = () => {
        const tabBtns = document.querySelectorAll('.tabBtn');
        tabBtns.forEach(element => {
            element.classList.remove('active');
        });
    }
    const getData = async() => {
        const response = await fetch('https://course-api.com/react-tabs-project');
        const jobs = await response.json();
        setData(jobs);
        setJobShown(jobs[0]);
        setLoading(false);
    }
    useEffect(() => {
        getData();
    }, []);
    if (loading) {
        return <p>Loading...</p>
    } else {
        return (
            <>
                <ul className='tabsList'>
                    {data.map((job) => {
                        return <li key={job.id} className='tabBtn' id={job.id} onClick={(e) => {
                            classHandler();
                            document.getElementById(job.id).classList.add('active');
                            const newJobShown = data.filter((job) => job.id === e.target.id);
                            setJobShown(newJobShown[0]);
                        }}>{job.company}</li>;
                    })}
                </ul>
                <article className='tabDetails'>
                    <TabDetails {...jobShown}/>
                </article>
            </>
        );
    }
}
export default Tabs;