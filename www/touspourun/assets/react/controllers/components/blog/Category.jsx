import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function Category({ onCategoryChange }) {
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:48000/api/categories')
            .then((response) => {
                setCategories(response.data['hydra:member']);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleCategoryChange = (event) => {
        const selected = event.target.value;
        setSelectedCategories(selected);
        onCategoryChange(selected);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
                <Select
                    label="Categorie"
                    multiple
                    value={selectedCategories}
                    onChange={handleCategoryChange}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {categories.map((category) => (
                        <MenuItem key={category.id} value={category.name}>
                            {category.name}
                        </MenuItem>
                    ))}
                </Select>
        </FormControl>
    );
}
