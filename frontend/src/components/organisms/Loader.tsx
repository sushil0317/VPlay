import React from "react";

const Loader = () => {
    return (
        <div className="flex gap-3 animate-bounce">
            <div className="w-4 h-4 rounded-full bg-purple"> </div>
            <div className="w-4 h-4 rounded-full bg-purple"> </div>
            <div className="w-4 h-4 rounded-full bg-purple"> </div>
            <div className="w-4 h-4 rounded-full bg-purple"> </div>
        </div>
    );
};

export default Loader;
