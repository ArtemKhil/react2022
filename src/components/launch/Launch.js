import React from 'react';

function Launch(props) {

    let {launch} = props;

    return (
        <>
            <div className={'wrap'}>

                <h2>{launch.mission_name}({launch.launch_year})</h2>
                <img src={launch.links.mission_patch_small} alt="launch_picture"/>

            </div>
        </>
    );
}

export default Launch;