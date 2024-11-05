import React, { useState } from 'react';

const NewPage = () => {
    const [circles, setCircles] = useState([]);

    const handleAddCircle = (x, y) => {
        setCircles([...circles, { x, y }]);
    };

    return (
        <div 
            className="min-h-[100vh] h-full w-full bg-gray-400 relative" 
            onClick={(event) => handleAddCircle(event.clientX, event.clientY)}
        >
           
            {circles.map((circle, index) => (
                <div 
                    key={index} 
                    className="bg-red-500 w-8 h-8 rounded-full absolute" 
                    style={{ 
                        left: circle.x - 16, 
                        top: circle.y - 16   
                    }}
                ></div>
            ))}
        </div>
    );
};

export default NewPage;
