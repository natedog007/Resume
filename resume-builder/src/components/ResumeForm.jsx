import {useState} from 'react';

const ResumeForm = ({ onUpdate }) => {
    const[resumeData, setResumeData] = useState({
        name: "",
        email: "",
        phone: "",
        experience: "",
        education: "",
        skills: "",        
    }); 

    const handleChange = (e) => {
        setResumeData({...resumeData, [e.target.name]: e.target.value});
        onUpdate({ ...resumeData, [e.target.name]: e.target.value });
    };

}

