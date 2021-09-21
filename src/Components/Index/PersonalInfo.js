import React from 'react'

export const PersonalInfo = ({ personalInfo } = {}) => {
    return (
        <section className="wow">
            {
                <div className="main-personal animate__animated animate__fadeInUp">
                    <div className="main__info iam">
                        <h2>¿Quien soy?</h2>
                        <p>{personalInfo.iAm}</p>
                    </div>
                    <div className="main__info carrer">
                        <h2>Carrera profesional</h2>
                        <p>{personalInfo.carrer}</p>
                    </div>
                </div>
            }
        </section>
    )
}
