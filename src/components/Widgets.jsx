import React from 'react';
//CSS Import
import './Widgets.css';
//MUI Import
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>
                    LinkedIn News
                    <InfoIcon/>
                </h2>
            </div>
            {newsArticle('Best dev ever', 'Top news - 5432 readers')}
            {newsArticle('Coronavirus: PL Updates', 'Top news - 3255 readers')}
        </div>
    );
};

export default Widgets;
