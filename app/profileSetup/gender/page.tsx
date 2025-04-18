'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenusMars, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import buttonStyles from '@/styles/buttons.module.css';
import layout from '@/styles/layout.module.css';
import formStyles from '@/styles/forms.module.css';

export default function GenderScreen() {
    const [gender, setGender] = useState('');
    const router = useRouter();

    const handleNext = () => {
        if (!gender) return;
        router.push('/profileSetup/skillLevel');
      };

  return (
    <div className={layout['safe-area']}>
      <div className="container">
        <div className={layout['top-row']}>
          <div className={buttonStyles['icon-circle']}>
            <FontAwesomeIcon icon={faVenusMars} size="lg" />
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
          <h2 className={formStyles['heading']}>Which gender describes you the best?</h2>

            <div className={formStyles['radio-options']}>
                {['Man', 'Woman', 'Other'].map((option) => (
                    <div key={option} className={formStyles['radio-row']}>
                        <label className={formStyles['radio-label']}>{option}</label>
                            <button
                            type="button"
                            onClick={() => setGender(option)}
                            className={`${formStyles['radio-circle']} ${gender === option ? formStyles['selected'] : ''}`}
                            aria-label={`Select ${option}`}
                            />
                    </div>
                ))}
            </div>

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