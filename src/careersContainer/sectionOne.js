import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styles from './styles/sectionOne.module.css';
import careerPersons from './images/section_one_image.svg';

const SectionOne = () => (
  <section className={`container my-5`}>
    <div className={`row`}>
      <div className={`col-md-7 col-sm-12 d-flex flex-column justify-content-center`}>
        <div className={`mx- ${styles.content}`}>
          <h2 className={styles.heading2}>Work with us</h2>
          <p className={`py-4 ${styles.text}`}>
            Explore remote-friendly, flexible opportunities and join our mission to make work life simpler, more
            pleasant and more productive.
          </p>
          <Link href="#">
            <a className={styles.join}>Join us</a>
          </Link>
        </div>
      </div>

      <div className={`col-md-5 col-sm-12`}>
        <div className={`${styles.icontainer}`}>
          <Image src={careerPersons} alt="career_persons" className={`img-fluid `} />
        </div>
      </div>
    </div>
  </section>
);

export default SectionOne;