import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../velo.json'

export default class LottieControl extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const buttonStyle = {
            display: 'block',
            margin: '10px auto'
        };

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <Lottie options={defaultOptions}
                    height={150}
                    width={150}
                  />)
            }
}
