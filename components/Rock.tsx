import React, { FunctionComponent } from 'react'
import Image from 'next/image'

interface RockProps {
    
}
 
const Rock: FunctionComponent<RockProps> = () => {
    return (
        <>
            <Image src="/images/icon-rock.svg" alt="Rock Icon" width={52} height={52} />
        </>
    );
}
 
export default Rock;