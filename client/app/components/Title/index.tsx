'use client'

import { useEffect, useState } from 'react';
import { TITLE_CHANGING_WORDS } from '@constants/constants';
import style from "./style.module.scss";

const Title=()=> {

    const [index, setIndex] = useState<number>(0);

    useEffect(() => {

        const interval = setInterval(() => {

            const nextIndex = (index + 1) % TITLE_CHANGING_WORDS.length;
            setIndex(nextIndex);

        }, 3000);

        return () => clearInterval(interval);

    }, [index]);
    return (
        <h1 className={style.title}>Global software development
            <br />
            partner in <span>
            {TITLE_CHANGING_WORDS.map((word, wordIndex) => (
                    <b className={`${style.changingText} ${index===wordIndex?style.isVisible:style.isHidden}`} key={wordIndex}>{word}</b>
                ))}
            </span>
            <br />
            with 500+ developers on board
        </h1>
    );
};

export default Title;