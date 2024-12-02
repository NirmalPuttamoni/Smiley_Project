import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Added new icons
import { Line } from 'react-chartjs-2'; // Chart for graph representation
import 'chart.js/auto'; // Chart.js dependency

const AccessToSocialMedia = () => {
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const socialMediaAccounts = [
    {
      platform: 'Instagram',
      handle: '@athlete_instagram',
      profilePic: 'https://via.placeholder.com/150',
      followers: '1.2M',
      engagementRate: '5.2%',
      posts: 300,
      link: 'https://instagram.com/athlete_instagram'
    },
    {
      platform: 'Twitter',
      handle: '@athlete_twitter',
      profilePic: 'https://via.placeholder.com/150',
      followers: '800K',
      engagementRate: '3.8%',
      posts: 250,
      link: 'https://twitter.com/athlete_twitter'
    },
    {
      platform: 'Facebook',
      handle: '@athlete_facebook',
      profilePic: 'https://via.placeholder.com/150',
      followers: '1M',
      engagementRate: '4.5%',
      posts: 350,
      link: 'https://facebook.com/athlete_facebook'
    },
    {
      platform: 'LinkedIn',
      handle: '@athlete_linkedin',
      profilePic: 'https://via.placeholder.com/150',
      followers: '500K',
      engagementRate: '2.5%',
      posts: 180,
      link: 'https://linkedin.com/in/athlete_linkedin'
    },
    {
      platform: 'YouTube',
      handle: '@athlete_youtube',
      profilePic: 'https://via.placeholder.com/150',
      followers: '1.5M',
      engagementRate: '6.1%',
      posts: 100,
      link: 'https://youtube.com/c/athlete_youtube'
    }
  ];

  const engagementData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Followers Growth',
        data: [1000, 2000, 2500, 3000, 3500],
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const handleAnalyticsClose = () => setShowAnalytics(false);
  const handleAnalyticsShow = () => setShowAnalytics(true);

  return (
    <div className="social-media-container" style={{ padding: '30px', backgroundColor: '#f8f9fa' }}>
      {/* Heading */}
      <h4
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2.5rem',
          fontWeight: '600',
          color: '#333',
          textTransform: 'uppercase',
        }}
      >
        Access to Social Media
      </h4>

      {/* Social Media Accounts Display */}
      <div className="social-media-cards" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {socialMediaAccounts.map((account, index) => (
          <Card
            key={index}
            className="social-media-card"
            style={{
              width: '18rem',
              margin: '20px',
              transition: 'transform 0.3s ease-in-out',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '10px',
              overflow: 'hidden',
              cursor: 'pointer',
              backgroundColor: '#fff',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Card.Img
              variant="top"
              src={account.profilePic}
              style={{
                height: '150px',
                width: '150px',
                objectFit: 'cover',
                borderRadius: '50%',
                margin: '10px auto',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold' }}>{account.platform}</Card.Title>
              <Card.Text>
                <strong>{account.handle}</strong>
                <br />
                Followers: {account.followers}
                <br />
                Posts: {account.posts}
                <br />
                Engagement Rate: {account.engagementRate}
              </Card.Text>
              <Button
                variant="primary"
                onClick={handleAnalyticsShow}
                style={{ width: '100%', marginBottom: '10px', backgroundColor: '#007bff' }}
              >
                View Analytics
              </Button>
              <Button
                variant="secondary"
                href={account.link}
                target="_blank"
                style={{ width: '100%' }}
              >
                Visit Profile
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Modal for Analytics */}
      <Modal show={showAnalytics} onHide={handleAnalyticsClose}>
        <Modal.Header closeButton>
          <Modal.Title>Social Media Analytics</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h5>Engagement Metrics</h5>
            <p>Engagement Rate: 4.5%</p>
            <p>Post Interactions: 250 Likes, 50 Comments, 30 Shares</p>
            <div style={{ margin: '20px 0' }}>
              <h6>Followers Growth Over Time</h6>
              <Line data={engagementData} />
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <Button
              variant="primary"
              onClick={handleAnalyticsClose}
              style={{ marginRight: '10px' }}
            >
              Download Report
            </Button>
            <Button variant="secondary" onClick={handleAnalyticsClose}>
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AccessToSocialMedia;