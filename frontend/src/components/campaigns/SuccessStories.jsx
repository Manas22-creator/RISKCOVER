import React, { useState } from "react";
import "./SuccessStories.css";
// import VideoModal from "../common/VideoModal";

// replace with your real video
// import testimonialVideo from "../../assets/videos/customer-testimonial.mp4";

const SuccessStories = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="success-stories-section">
      <div className="container">
        <div className="section-header">
          <h2>Customer Success Stories</h2>
          <p>See how we've helped real customers in their time of need</p>
        </div>

        <div className="testimonial-grid">
          <div
            className="testimonial-video-card"
            onClick={() => setIsVideoOpen(true)}
          >
            <div className="play-icon">▶</div>
            <p>Customer Testimonial Video</p>
            <span>Click to play</span>
          </div>

          <div className="testimonial-text">
            <p>
              "When I had an accident last month, VehicleGuard processed my
              claim in less than 24 hours. Their support team was incredible and
              made a stressful situation much easier."
            </p>
            <strong>Jessica Martinez</strong>
            <span>Los Angeles, CA</span>
          </div>
        </div>
      </div>

      {/* <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc={testimonialVideo}
      /> */}
    </section>
  );
};

export default SuccessStories;
