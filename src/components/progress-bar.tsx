import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
${(props: any) => `
width: ${props['data-width']}%`}
`;

export const ProgressBar = () => {
    const [wid, setWid] = useState(0);
    const progressRef = useRef(null);

    function handleChange(ev: ChangeEvent<HTMLInputElement>) {
        setWid(Number(ev.target?.value));
        (progressRef.current as any).style = {
            width: `${Number(ev.target.value)} %`
        }
    }

    return <>
        <h3> Progress bar</h3>
        <section className='widget progress-widget'>
            {wid <= 100 ?

                <div className='progress-bar' >
                    <StyledDiv data-width={wid} ref={progressRef} className='progress-bar-indicator' /></div>
                : <p>Please select a number less than or equal to 100</p>}
            Enter number: <input type="number" value={wid} onChange={handleChange} />

        </section>
    </>
}