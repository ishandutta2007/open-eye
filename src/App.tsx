import { useState, useEffect } from 'react';
import { 
  Eye, 
  LayoutDashboard, 
  Video, 
  DoorClosed, 
  Building2, 
  Settings, 
  Bell, 
  Search,
  Activity,
  Users,
  ShieldCheck,
  AlertTriangle,
  Play
} from 'lucide-react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <Eye className="brand-icon" size={32} />
          <span>OpenEye</span>
        </div>

        <nav className="nav-menu">
          <a href="#" className="nav-item active">
            <LayoutDashboard size={20} />
            Overview
          </a>
          <a href="#" className="nav-item">
            <Video size={20} />
            Vision
          </a>
          <a href="#" className="nav-item">
            <DoorClosed size={20} />
            Access Control
          </a>
          <a href="#" className="nav-item">
            <Building2 size={20} />
            Smart Sense
          </a>
          <a href="#" className="nav-item">
            <Activity size={20} />
            Analytics
          </a>
          <a href="#" className="nav-item">
            <Settings size={20} />
            Settings
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="avatar">AD</div>
          <div className="user-info">
            <span className="user-name">Admin User</span>
            <span className="user-role">System Administrator</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1 className="page-title">Command Center</h1>
          <div className="header-actions">
            <button className="action-btn">
              <Search size={20} />
            </button>
            <button className="action-btn">
              <Bell size={20} />
            </button>
          </div>
        </header>

        <div className="dashboard">
          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card glass-panel animate-fade-in">
              <div className="stat-icon success">
                <Video size={28} />
              </div>
              <div className="stat-details">
                <span className="stat-value">124</span>
                <span className="stat-label">Active Cameras</span>
              </div>
            </div>
            
            <div className="stat-card glass-panel animate-fade-in delay-1">
              <div className="stat-icon success">
                <ShieldCheck size={28} />
              </div>
              <div className="stat-details">
                <span className="stat-value">48</span>
                <span className="stat-label">Doors Secured</span>
              </div>
            </div>

            <div className="stat-card glass-panel animate-fade-in delay-2">
              <div className="stat-icon danger">
                <AlertTriangle size={28} />
              </div>
              <div className="stat-details">
                <span className="stat-value">3</span>
                <span className="stat-label">Active Alerts</span>
              </div>
            </div>

            <div className="stat-card glass-panel animate-fade-in delay-3">
              <div className="stat-icon">
                <Users size={28} />
              </div>
              <div className="stat-details">
                <span className="stat-value">1,492</span>
                <span className="stat-label">Total Entries Today</span>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
            
            {/* Live Vision */}
            <div>
              <div className="section-header">
                <h2 className="section-title">Live Vision</h2>
                <button className="action-btn" style={{ width: 'auto', padding: '0 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 500 }}>
                  View All
                </button>
              </div>
              
              <div className="camera-grid">
                {/* Camera 1 */}
                <div className="camera-card animate-fade-in">
                  <img src="/warehouse.jpg" alt="Warehouse Feed" className="camera-feed" />
                  <div className="camera-overlay">
                    <div className="camera-header">
                      <span className="camera-name">Warehouse Loading Dock A</span>
                      <div className="camera-status">
                        <div className="status-dot"></div>
                        LIVE
                      </div>
                    </div>
                    <div className="camera-footer">
                      <span>4K • 30 FPS</span>
                      <span>{currentTime}</span>
                    </div>
                  </div>
                </div>

                {/* Camera 2 */}
                <div className="camera-card animate-fade-in delay-1">
                  <img src="/lobby.jpg" alt="Lobby Feed" className="camera-feed" />
                  <div className="camera-overlay">
                    <div className="camera-header">
                      <span className="camera-name">Main Office Lobby</span>
                      <div className="camera-status">
                        <div className="status-dot"></div>
                        LIVE
                      </div>
                    </div>
                    <div className="camera-footer">
                      <span>4K • 30 FPS</span>
                      <span>{currentTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Events */}
            <div>
              <div className="section-header">
                <h2 className="section-title">Recent Events</h2>
              </div>
              
              <div className="glass-panel event-list animate-fade-in delay-2">
                <div className="event-item">
                  <div className="event-icon" style={{ color: 'var(--danger)', background: 'rgba(239, 68, 68, 0.1)' }}>
                    <AlertTriangle size={20} />
                  </div>
                  <div className="event-content">
                    <div className="event-title">Unrecognized Person Detected</div>
                    <div className="event-time">Warehouse Loading Dock A • 2 mins ago</div>
                  </div>
                  <div className="event-action">
                    <Play size={16} />
                  </div>
                </div>
                
                <div className="event-item" style={{ borderTop: '1px solid var(--border-color)' }}>
                  <div className="event-icon">
                    <DoorClosed size={20} />
                  </div>
                  <div className="event-content">
                    <div className="event-title">Door Forced Open Alarm</div>
                    <div className="event-time">Server Room B • 15 mins ago</div>
                  </div>
                  <div className="event-action">
                    <Play size={16} />
                  </div>
                </div>

                <div className="event-item" style={{ borderTop: '1px solid var(--border-color)' }}>
                  <div className="event-icon">
                    <Users size={20} />
                  </div>
                  <div className="event-content">
                    <div className="event-title">Tailgating Event</div>
                    <div className="event-time">Main Office Lobby • 1 hr ago</div>
                  </div>
                  <div className="event-action">
                    <Play size={16} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
