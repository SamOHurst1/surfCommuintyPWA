'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import buttonStyles from '@/styles/buttons.module.css';
import layout from '@/styles/layout.module.css';
import formStyles from '@/styles/forms.module.css';

export default function SkillLevelScreen() {
    const [skillLevel, setSkillLevel] = useState('');
    const router = useRouter();

    const handleNext = () => {
        if (!skillLevel) return;
        router.push('/profileSetup/consistency');
      };

  return (
    <div className={layout['safe-area']}>
      <div className="container">
        <div className={layout['top-row']}>
          <div className={buttonStyles['icon-circle']}>
            <FontAwesomeIcon icon={faWaveSquare} size="lg" />
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
          <h2 className={formStyles['heading']}>What is your surfing skill level?</h2>

            <div className={formStyles['radio-options']}>
            {['Beginner', 'Intermediate', 'Advanced','Professional'].map((option) => (
                    <div key={option} className={formStyles['radio-row']}>
                        <label className={formStyles['radio-label']}>{option}</label>
                            <button
                            type="button"
                            onClick={() => setSkillLevel(option)}
                            className={`${formStyles['radio-circle']} ${skillLevel === option ? formStyles['selected'] : ''}`}
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