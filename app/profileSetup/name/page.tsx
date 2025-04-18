'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './NameScreen.css';

export default function NameScreen() {
  const [firstName, setFirstName] = useState('');
  const router = useRouter();

  const handleNext = () => {
    if (!firstName.trim()) return; // basic check
    router.push('/profileSetup/birthday'); // or next step
  };

  return (
    <div className="safe-area">
      <div className="container">
        <div className="top-row">
          <div className="icon-circle">
            <FontAwesomeIcon icon={faBook} size="lg" />
          </div>
          <Image
            src="/assets/3tdots.png"
            alt="3 dots"
            width={100}
            height={50}
            className="dots-image"
          />
        </div>

        <div className="form-section">
          <h2 className="heading">What's your name?</h2>

          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name (required)"
            className="input"
            autoFocus
          />

          <input
            placeholder="Last Name"
            className="input"
          />

          <p className="note">Last Name is optional</p>
        </div>

        <div className="button-row">
          <button onClick={handleNext} className="next-button">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}