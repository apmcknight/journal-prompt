import React, { useState, useEffect } from 'react';

const DataCall = () => {
    const apiURL = 'http://localhost:8080/api'
    const [promptId, setPromptId] = useState('');
    const [promptTitle, setPromptTitle] = useState('');
    const [promptCatagory, setPromptCatagory] = useState('');
    const [prompContent, setPromptContent] = useState('');

    useEffect(() => {
        fetch(apiURL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    })
}

export default DataCall;