import React from 'react'
import Presentation from './Presentation'
import { PersonalInfo } from './PersonalInfo'
import { ProjectsCarrousel } from './ProjectsCarrousel'

export const IndexScreen = () => {
    return (
        <>
            <Presentation />
            <PersonalInfo />
            <ProjectsCarrousel />
        </>
    )
}
