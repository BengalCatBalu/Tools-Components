import React from 'react';
import PropTypes from 'prop-types';
import ToolsNavigation from './ToolsNavigation';
import { ToastContainer } from 'react-toastify';
import MintNFT from './MintNFT/MintNFT';
import PaySuiText from './PaySui/PaySuiText';
import PaySui from './PaySui/PaySui';
import Objects from './Objects/Objects';
import ToolsHome from './MainPage/Mainpage';
import Github from './Github/Github';
import GenerateNft from './GenerateNft/GenerateNft';
import styled from 'styled-components';
import PhonePage from './PagePhone';

const Main = styled.div`
    @media (max-width: 64em) {
        display: none;

    }
`
const MainPhone = styled.div`
    display: none;
    @media (max-width: 64em) {
        display: flex;
    }
`

function Tools() {
    return (
        <>
            <Main name='tools'>
                <ToolsHome />
                <MintNFT />
                <PaySuiText />
                <ToastContainer autoClose={1000} />
                <PaySui />
                <Objects />
                <GenerateNft />
                <Github />
            </Main>
            <MainPhone>
                <PhonePage/>
            </MainPhone>
        </>
    );
}

export default Tools;