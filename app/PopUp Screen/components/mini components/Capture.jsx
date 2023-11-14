"use client";
import { useRef, useEffect, useState } from "react";
import * as faceapi from  "face-api.js";
import Webcam from "react-webcam";

export const Capture = () => {
    const canvasRef = useRef();

    const createCanvas = async () => { 
        try {
            const video = document.getElementById('webcam');

            if (video) {
                await setTimeout(() => {
                    const canvas = faceapi.createCanvasFromMedia(video);
                    canvasRef.current.appendChild(canvas);
                    
                    console.clear();
                
                setInterval(() => {
                    const detectionOption = new faceapi.TinyFaceDetectorOptions();
                    const detection = faceapi.detectAllFaces(video, detectionOption).withFaceLandmarks();

                    console.log(detection);

                    try {
                        faceapi.draw.drawDetections(canvas, detection);
                        faceapi.draw.drawFaceLandmarks(canvas, detection);
                    } catch (error) {
                        console.log(`Failed because: ${error}`);
                    }

                    if (detection) {
                        const landmarks = detection.landmarks;
                        console.log(landmarks);
                        // const leftEye = landmarks.getLeftEye();
                        // const rightEye = landmarks.getRightEye();
                        // const nose = landmarks.getNose();

                        // const horizontalDistance = Math.abs(leftEye[0].x - rightEye[3].x);
                        // const verticalDistance = Math.abs(nose[0].y - (leftEye[1].y + rightEye[1].y) / 2);

                        // // You can define your alignment thresholds here
                        // const horizontalThreshold = 30; // Example value, adjust as needed
                        // const verticalThreshold = 20;   // Example value, adjust as needed

                        // const alignmentCheckPassed =
                        //     horizontalDistance <= horizontalThreshold && verticalDistance <= verticalThreshold;

                        // // Update the UI based on alignment status
                        // if (alignmentCheckPassed) {
                        //     // Alignment is good
                        //     console.log('Face aligned properly');
                        // } else {
                        //     // Alignment is not correct
                        //     console.log('Face alignment not correct');
                        // }
                    }
                }, 5000);
            }, 5000);
            }
        } catch (error) {
            throw new Error(`Controlled Error: ${error}`);
        }
    }

    useEffect(() => {
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri("./face-api/models"),
            faceapi.nets.faceLandmark68Net.loadFromUri("./face-api/models")
        ]).then(createCanvas);
    }, []);

    return (
        <section className="h-full w-full grid place-items-center overflow-hidden relative">
            <Webcam
                    audio={false}
                    id="webcam"
                    className="w-full min-h-full object-cover relative"
                    screenshotFormat="image/jpeg"
                />
            <div ref={canvasRef} className="absolute top-0 left-0 h-full w-full"></div>
        </section>
    )
}
