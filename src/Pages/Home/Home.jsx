import React from 'react';
import TrustedUser from './TrustedUser';
import Header from './Header';
import Collaborate from './Collaborate';
import SharedComponant from './SharedComponant';
import image1 from '../../assets/Others/hybridWork.png'
import image2 from '../../assets/Others/integrations.png'
import Teams from './Teams';

const Home = () => {
    return (
        <div className='md:max-w-[80%] mx-auto'>

            <Header></Header>

            <TrustedUser></TrustedUser>
            <Collaborate></Collaborate>
            <SharedComponant
                image={image1}
                mainText={'Work together, wherever you work'}
                subText={'In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are. '}
            >
            </SharedComponant>
            
            <SharedComponant
                image={image2}
                mainText={'Connect your tools, close your tabs '}
                subText={'Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love. '}
                statePass={true}
            >
            </SharedComponant>

            <Teams></Teams>


        </div>
    );
};

export default Home;