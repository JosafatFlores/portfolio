import React, { useEffect, useState } from 'react'
import ReactLoading from "react-loading";

import { useFetchFirebase } from '../../hooks/useFetchFirebase'
import { LinkField } from './LinkField';

export const LinktreeScreen = () => {

    const { data: personalInfo, loading: personalLoading } = useFetchFirebase('personalnfo')
    const { data: links, loading: linksLoading } = useFetchFirebase('links')
    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1500)
       
    }, [linksLoading])

    return (
        <div className="linktree">
            {
                (personalLoading)
                    ? <div className="loader">
                        <ReactLoading type={'spinningBubbles'} color='white' height={100} width={100} />
                    </div>
                    : <div  className=" animate__animated animate__fadeInUp">
                        <div className="linktree__circle">
                            <img src={personalInfo[0].photo} alt="josafat-flores-foto" />
                        </div>
                        {
                            (!linksLoading && show)
                            && (
                                links.map(link => (
                                    <LinkField key={link.id} link={link} />
                                ))
                            )
                        }

                    </div>
            }

        </div>
    )
}
