import React from "react";
import "../style/style.scss";

const Upload = () => {
  return (
    <div className="upload-page">
      <div className="upload-container">
        {/* Left Panel - Info Section with Job Description */}
        <div className="upload-left">
          <div className="left-content">
            {/* Job Description Card */}
            <div className="input-card card-accent-orange">
              <div className="card-header">
                <span className="card-number">01</span>
                <label className="card-label">Job Description</label>
              </div>
              <div className="card-body">
                <textarea
                  className="input-textarea auto-scroll"
                  placeholder="Paste the job posting you're targeting..."
                  rows="20"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="upload-right">
          <div className="form-wrapper">
            <h2 className="form-title">Upload Resume</h2>
            <p className="form-subtitle">
              Upload or paste your resume to begin
            </p>

            {/* Form */}
            <div className="upload-form">
              {/* Resume Upload Card */}
              <div className="input-card card-accent-purple">
                <div className="card-header">
                  <span className="card-number">02</span>
                  <label className="card-label">Your Resume</label>
                </div>
                <div className="card-body">
                  <input
                    type="file"
                    id="resume-upload"
                    className="file-hidden"
                    accept=".pdf,.doc,.docx"
                  />
                  <label htmlFor="resume-upload" className="upload-zone">
                    <div className="upload-icon-box">
                      <svg
                        className="upload-svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                      </svg>
                    </div>
                    <div className="upload-text">
                      <span className="upload-primary">Drop file or click</span>
                      <span className="upload-secondary">PDF, DOC, DOCX</span>
                    </div>
                  </label>
                  <div className="or-divider">
                    <span>OR</span>
                  </div>
                  <textarea
                    className="input-textarea compact auto-scroll"
                    placeholder="Paste self description..."
                    rows="4"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button className="btn-submit">
                <span className="btn-content">
                  <span className="btn-text">Analyze Now</span>
                  <span className="btn-sub">Get insights in seconds</span>
                </span>
                <div className="btn-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
