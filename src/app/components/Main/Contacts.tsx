import React from 'react';
import { useAppSelector } from '../../redux/reduxHooks';
import { selectDic } from '../../redux/languageSlice';

export default function Contacts() {
    const { contacts } = useAppSelector(selectDic);

    return (
        <section className='contacts main-framed' id='contacts'>
            <span className='title title--padding'>{contacts.title}</span>
            <span className='contacts__desc'>{contacts.desc}</span>
            <ul className='socials'>
                <li className='socials__item'>
                    <a
                        className='socials__item-link'
                        href='mailto: kirillkazakovwork@gmail.com'
                    >
                        <img
                            className='socials__item-img'
                            src='./svg/email.svg'
                            alt='email'
                        />
                    </a>
                </li>
                <li className='socials__item'>
                    <a className='socials__item-link' href='https://t.me/Teahohotka'>
                        <img
                            className='socials__item-img'
                            src='./svg/telegram.svg'
                            alt='telegram'
                        />
                    </a>
                </li>
                <li className='socials__item'>
                    <a
                        className='socials__item-link'
                        href='https://www.linkedin.com/in/kirillkazakoff'
                    >
                        <img
                            className='socials__item-img'
                            src='./svg/linkedIn.svg'
                            alt='linkedIn'
                        />
                    </a>
                </li>
                <li className='socials__item'>
                    <a
                        className='socials__item-link'
                        href='https://stackoverflow.com/users/16492740/kirill-kazakov'
                    >
                        <img
                            className='socials__item-img'
                            src='./svg/stackOverflow.svg'
                            alt='stackOverflow'
                        />
                    </a>
                </li>
            </ul>
        </section>
    );
}
