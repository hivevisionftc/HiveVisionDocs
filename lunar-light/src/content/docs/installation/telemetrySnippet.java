BallDetectorPipeline.BallBlob red = baller.bestOf(BallDetectorPipeline.BallColor.RED);
if (red != null) {
        telemetry.addData("red", "cx=%.2f cy=%.2f", red.cxNorm, red.cyNorm);
}