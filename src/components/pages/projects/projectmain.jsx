import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import ProjectsSite from './projectSite/projectsite';
import Estrutura from '../../Estrutura/Estrutura';
import ProjectsMobile from './projectMobile/projectMobile';
const ProjectsMain = () => {
    const mobile = useMediaQuery('(max-width:800px)')
    return (
        <div>
            <Estrutura>
            {!mobile ? (
                <ProjectsSite />
            ) : (
            <ProjectsMobile />
            )}
            </Estrutura>
        </div>
    )
}

export default ProjectsMain;