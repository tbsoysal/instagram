const GRADIENTS = [
  "linear-gradient(135deg,#f6d365,#fda085)",
  "linear-gradient(135deg,#84fab0,#8fd3f4)",
  "linear-gradient(135deg,#a18cd1,#fbc2eb)",
  "linear-gradient(135deg,#ff9a9e,#fecfef)",
  "linear-gradient(135deg,#667eea,#764ba2)",
];

export default function PhoneMockup() {
  return (
    <div className="phone-col">
      <div className="phone-frame">
        <div className="phone-shell phone-frame-back">
          <PhoneScreen offset={1} />
        </div>
        <div className="phone-shell">
          <PhoneScreen offset={0} />
        </div>
      </div>
    </div>
  );
}

function PhoneScreen({ offset }: { offset: number }) {
  return (
    <div className="phone-screen">
      <div className="phone-topbar">Instagram</div>
      <div className="phone-stories">
        {GRADIENTS.map((g, i) => (
          <div className="story-ring" key={i}>
            <div
              className="story-ring-inner"
              style={{ background: GRADIENTS[(i + offset) % GRADIENTS.length] }}
            />
          </div>
        ))}
      </div>
      <div className="phone-feed">
        <div className="feed-post">
          <div className="feed-post-head">
            <div
              className="feed-avatar"
              style={{ background: GRADIENTS[offset % GRADIENTS.length] }}
            />
            <div className="feed-name" />
          </div>
          <div
            className="feed-photo"
            style={{ background: GRADIENTS[(offset + 2) % GRADIENTS.length] }}
          />
          <div className="feed-actions">
            <div className="feed-icon" />
            <div className="feed-icon" />
            <div className="feed-icon" />
          </div>
        </div>
      </div>
      <div className="phone-tabbar">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
