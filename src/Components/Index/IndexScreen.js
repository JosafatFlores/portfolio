    import React from 'react'
    import ReactLoading from "react-loading";

    import { useFetchFirebase } from '../../hooks/useFetchFirebase';

    import { Presentation } from './Presentation'
    import { PersonalInfo } from './PersonalInfo'
    import { ProjectsCarrousel } from './ProjectsCarrousel'

    export const IndexScreen = () => {
        const { data: personalInfo, loading: personalLoading } = useFetchFirebase('personalnfo')
        const { data: projects, loading: projectsLoading } = useFetchFirebase('projects')

        return (
            <>

                {
                    (personalLoading)
                        ? <div className="loader">
                            <ReactLoading type={'spinningBubbles'} color='white' height={100} width={100} />
                        </div>
                        : <>
                            <Presentation personalInfo={personalInfo[0]} />
                            <PersonalInfo personalInfo={personalInfo[0]} />
                            {
                                (!projectsLoading)
                                && <ProjectsCarrousel projects={projects} />
                            }
                        </>
                }
            </>
        )
    }
