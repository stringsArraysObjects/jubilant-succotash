import React, {useState} from "react";

const FormSection = ({setPlants, setMessage}) => {
    const [formData, setFormData] = useState({
        edible: '',
        pets_kids: '',
        lifespan: '',
        sunlight: ''
    })

    const handleChange = (smurf) => {
        const {name, value} = smurf.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

   const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [array[i], array[j]] = [array[j], array[i]]; // swap elements
        }
    }

    const handleSubmit = async (smurf) => {
        smurf.preventDefault()
        const params = new URLSearchParams()
        const apiUrl = `https://perenual.com/api/species-list?key=${import.meta.env.VITE_PERENUAL_API_KEY}&indoor=1&${params}`;

        
        
        try {

            const response = await fetch(apiUrl);
            const data = await response.json();
            const validData = data.data.filter(item => 
            !(item.cycle.includes("Upgrade") ||
                item.watering.includes("Upgrade") ||
                item.sunlight.includes("Upgrade"))
            );
        }catch (error){

        }

    }
}