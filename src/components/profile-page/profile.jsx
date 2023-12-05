import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import ProfileForm from './ProfileForm';
import Footer from './Footer';


const Profile = () => {
    const [profileImage, setProfileImage] = useState('');

    const backgroundStyle = {
        backgroundImage: `url('images/bg-profile.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

    useEffect(() => {
        const storedImage = localStorage.getItem('profileImage');
        if (storedImage) {
            setProfileImage(storedImage);
        }
    }, []);
    return (
        <>
            <div style={backgroundStyle}>
                <Navigation profileImage={profileImage} />
                <ProfileForm profileImage={profileImage} setProfileImage={setProfileImage} />
                <Footer />
            </div>
        </>
    );
};
export default Profile;