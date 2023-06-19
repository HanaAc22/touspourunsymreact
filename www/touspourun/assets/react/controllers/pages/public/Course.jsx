import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from "react-router";

export default function Course({id}) {
    const [course, setCourse] = useState([]);
    // const [id, setId] = this.props.match.params.id;
    console.log(id)

    useEffect(() => {
                function fetchData() {
                    // axios.get(`http://localhost:48000/api/courses/${id}`)
                    axios.get(`http://localhost:48000/api/courses/${id}`)
                         .then(response => {
                            setCourse(response.data)
                            console.log(response.data);
                        })
                        .catch(error => {
                            // Handle the error
                            console.error(error);
                        });
                }

                fetchData();

        },[id]);

    console.log("Course:", course);
    return (
        <div>
            {course && (
                <h2>{course.title}</h2>
            )}
        </div>
    );
}
