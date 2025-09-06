import React from 'react';
import css from './CafeInfo.module.css';

interface CafeInfoProps {
    title: string;
    description: string;
}
const CafeInfo:React.FC<CafeInfoProps> = ({ title, description }) => {

    return (
        <div className={css.container}>
            <h1 className={css.title}>{title}</h1>
            <p className={css.description}>{description}</p>
        </div>

    );
};

export default CafeInfo;


