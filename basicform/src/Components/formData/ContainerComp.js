import { Fragment } from 'react';
import Header  from './HeadingComp';
import "../scss/containercomp.scss";
export default function Container({children}){
    return (
        <Fragment>
            <div className = "container">
                <Header></Header>
                {children}
            </div>
        </Fragment>
    );
}