import React , { useState , useEffect } from 'react';
import Theatrelist from './theatrelist/Theatrelist';

const Theatre = () => {

    const useFetch = (url,requestMetadata) => {
        const [theatreList , setTheatreList] = useState("");

        useEffect(() => {
            async function fetchData() {
              const response = await fetch(url,requestMetadata);
              const json = await response.json();
              setTheatreList(json.theatre);
            }
            fetchData();
          }, [url]);

      return theatreList;
    };

    const url = "https://zincubate.in/api/MovieTicketChecker?action=getAllDetails";
    const postBody = {
             'user_mail_id' : 'sample@gmail.com'
        };
    const requestMetadata = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
    };
	const THEATRE = useFetch(url,requestMetadata);

    return (
        <Theatrelist items={THEATRE}/>
    )
}

export default Theatre;