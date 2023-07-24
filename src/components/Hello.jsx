import React, { useState, useEffect } from 'react'

export default function Hello() {
        const [students, setStudents] = useState([]);
        //fetch data from api
        useEffect(() => {
                fetch('http://test.test:8000/api/test')
                .then(res => res.json())
                .then(data => setStudents(data.message))
        }, [])
    return (
        <div><h1>oooo tai?</h1><h2>{students}</h2></div>
    )
}
