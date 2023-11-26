"use client";
import { useRef, useEffect, useState } from "react";
import * as faceapi from  "face-api.js";
import Webcam from "react-webcam";
import Image from "next/image";

export const Capture = () => {
    const canvasRef = useRef();
    const webcamRef = useRef();

    const createCanvas = async () => { 
        try {
            const video = document.getElementById('img');
            // const detectionOption = new faceapi.TinyFaceDetectorOptions();
            const detection = await faceapi.detectSingleFace(video);

            console.log(detection)
        } catch (error) {
            throw new Error(`Controlled Error: ${error}`);
        }
    }

    const detectGlasses = (landmarks) => {
        // Placeholder logic to detect glasses
        // You might use facial landmarks or other features
        // For simplicity, assume glasses detected if the distance between eye landmarks is above a threshold
        const leftEye = landmarks.getLeftEye();
        const rightEye = landmarks.getRightEye();
        const eyeDistance = faceapi.utils.euclideanDistance(leftEye[0], rightEye[3]);
        return eyeDistance > 40; // Adjust the threshold as needed
    };

    const checkFaceCentering = (landmarks) => {
        // Placeholder logic to check face centering
        // For simplicity, assume face is centered if nose tip is close to the center of the frame
        const noseTip = landmarks.getNose()[6];
        const frameCenter = { x: webcamRef.current.video.width / 2, y: webcamRef.current.video.height / 2 };
        const distanceToCenter = faceapi.utils.euclideanDistance(noseTip, frameCenter);
        return distanceToCenter < 50; // Adjust the threshold as needed
    };

    useEffect(() => {
        const loadModels = async () =>{
            try {
                await faceapi.nets.ssdMobilenetv1.loadFromUri("./face-api/models");
                createCanvas();
            } catch (error) {
                console.log(error);
            }
        }

        loadModels();
    }, []);

    return (
        <section className="h-full w-full grid place-items-center overflow-hidden relative">
            <Webcam
                    audio={false}
                    ref={webcamRef}
                    id="webcam"
                    videoConstraints={{facingMode: "user"}}
                    className="w-full min-h-full object-cover relative"
                    screenshotFormat="image/jpeg"
                />

            <Image 
                src={"https://ablexerb.sirv.com/Images/359387137_18372523543045858_3099127337037839958_n.jpg"}
                alt="Model"
                height={1000}
                width={1000}
                id="img"
                className="absolute max-w-md"
            />
            <div ref={canvasRef} className="absolute top-0 left-0 h-full w-full"></div>
        </section>
    )
}
