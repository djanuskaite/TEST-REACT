import React from 'react';
import Booklist from "../booklist/Booklist";
import Contacts from "../contacts/Contacts";
import VideoState from "../videostate/VideoState";
//Komponentai visada is didziosios raides. Folders - is mazosios.

const Main = () => {
    return (
        <div>
            <VideoState />
            <Booklist />
            <Contacts name='Ana Ivanuska' email='ivanuska_anna@yahoo.com' initialAge={19} />
        </div>
    )
}

export default Main