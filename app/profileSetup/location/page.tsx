'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import buttonStyles from '@/styles/buttons.module.css';
import layout from '@/styles/layout.module.css';
import formStyles from '@/styles/forms.module.css';

export default function LocationScreen() {
    const [location, setLocation] = useState('');
    const router = useRouter();

    const handleNext = () => {
        // if (!location) return;
        // need to add map here
        router.push('/profileSetup/gender');
      };

  return (
    <div className={layout['safe-area']}>
      <div className="container">
        <div className={layout['top-row']}>
          <div className={buttonStyles['icon-circle']}>
            <FontAwesomeIcon icon={faMapPin} size="lg" />
          </div>
          <Image
            src="/assets/3tdots.png"
            alt="3 dots"
            width={100}
            height={50}
            className={layout['dots-image']}
          />
        </div>

        <div className={formStyles['form-section']}>
          <h2 className={formStyles['heading']}>Where do you live?</h2>

          <input
            // type="date"
            // value={dateOfBirth}
            // onChange={(e) => setDateOfBirth(e.target.value)}
            // className={formStyles['input']}
          />
        </div>

        <div className={layout['button-row']}>
          <button onClick={handleNext} className={buttonStyles['next-button']}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}