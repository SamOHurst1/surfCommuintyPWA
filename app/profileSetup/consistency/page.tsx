'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import buttonStyles from '@/styles/buttons.module.css';
import layout from '@/styles/layout.module.css';
import formStyles from '@/styles/forms.module.css';

export default function ConsistencyScreen() {
    const [consistency, setConsistency] = useState('');
    const router = useRouter();

    const handleNext = () => {
        if (!consistency) return;
        router.push('/profileSetup/boardType');
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
            <h2 className={formStyles['heading']}>How often do you go surfing?</h2>

            <div className={formStyles['radio-options']}>
            {['Once a Month', 'Once a Week', '2 Times per Week','> 2 Times per Week'].map((option) => (
                    <div key={option} className={formStyles['radio-row']}>
                        <label className={formStyles['radio-label']}>{option}</label>
                            <button
                            type="button"
                            onClick={() => setConsistency(option)}
                            className={`${formStyles['radio-circle']} ${consistency === option ? formStyles['selected'] : ''}`}
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