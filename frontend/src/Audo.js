import React, { useState } from 'react';
import { ReactMic } from 'react-mic';

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [blobObject, setBlobObject] = useState(null);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const onData = (recordedBlob) => {
    // You can handle the recorded data here if needed
    console.log('chunk of real-time data is: ', recordedBlob);
  };

  const onStop = (recordedBlob) => {
    // Set the recorded audio blob object
    setBlobObject(recordedBlob);
  };

  return (
    <div>
      <h1>Voice Recorder</h1>
      <ReactMic
        record={isRecording}
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      <button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>

      {blobObject && (
        <div>
          <h2>Recorded Audio</h2>
          <audio controls>
            <source src={blobObject.blobURL} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;
