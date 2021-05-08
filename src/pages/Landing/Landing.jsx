import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import './Landing.scss';

const Landing = () => {
    const { transcript, resetTranscript } = useSpeechRecognition()

    const [listening, setListening] = useState(false)

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return (
            <div className="speech-container">
                <h3>Browser is not supported</h3>
            </div>
        )
    }

    const handleStart = () => {
        setListening(true);
        SpeechRecognition.startListening({ continuous: true, language: 'id' })
    }

    const handleStop = () => {
        setListening(false);
        SpeechRecognition.stopListening({ continuous: false, language: 'id' })
    }

    return (
        <div className="container-speech">
            <div className="box-btn">
                <a href="/#" className="btn btn-success btn-action" onClick={handleStart}>Start</a>
                <a href="/#" className="btn btn-danger btn-action" onClick={handleStop}>Stop</a>
                <a href="/#" className="btn btn-primary btn-action" onClick={resetTranscript}>Reset</a>
            </div>
            {
                listening ?
                    <div className="listening">Listening...</div>
                    : null
            }
            <div className="container-transcript">{transcript.toString().toLowerCase()}.</div>
        </div>
    )
}
export default Landing