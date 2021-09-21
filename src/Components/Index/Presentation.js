import React, { useEffect, useState } from 'react'
import ReactTextTransition, { presets } from "react-text-transition";

export const Presentation = ({personalInfo = {}}) => {
    const [presentation, setPresentation] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setPresentation(presentation => presentation + 1),
            3000
        );
        return () => clearTimeout(intervalId);
    }, [])

    return (
        <section className="wow main">

            {
                <>
                    <div className="main__circle  animate__animated animate__fadeInUp">
                        <img src={personalInfo.photo} alt="josafat-flores-foto" />
                    </div>

                    <div className="main__div animate__animated animate__fadeInUp">
                        <p >{personalInfo.description}</p>
                        {
                            personalInfo.skills.length !== 0
                            && <ReactTextTransition
                                className="main__textTransition"
                                text={personalInfo.skills[presentation % personalInfo.skills.length]}
                                springConfig={presets.gentle}
                                style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
                            />

                        }
                    </div>
                </>
            }
        </section>
    )
}