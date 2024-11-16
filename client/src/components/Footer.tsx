import React from "react";

const footer: React.FC = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <p className="footer-text">
                    Content copyright $copy; {new Date().getFullYear()} by Headline. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default footer;