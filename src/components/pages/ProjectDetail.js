import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchRepositoryDetails } from "../../services/githubApi";
import "../../styles/pages/ProjectDetail.css";

function ProjectDetail() {
  const { repoName } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        setLoading(true);
        const repoDetails = await fetchRepositoryDetails(repoName);
        setProject(repoDetails);
        setError(null);
      } catch (err) {
        setError('Failed to load project details. Please try again later.');
        console.error('Error loading project:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [repoName]);

  if (loading) {
    return (
      <div className="project-detail-container">
        <div className="loading-state">
          <p>Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="project-detail-container">
        <div className="error-state">
          <p>{error || 'Project not found'}</p>
          <Link to="/#projects" className="back-link">
            <button className="back-button">← Back to Projects</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <motion.div 
        className="project-detail-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/#projects" className="back-link">
          <motion.button 
            className="back-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Projects
          </motion.button>
        </Link>

        <motion.div 
          className="project-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="project-name">{project.name}</h1>
          {project.language && (
            <span className="project-language-badge">{project.language}</span>
          )}
        </motion.div>

        <motion.p 
          className="project-description-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {project.description}
        </motion.p>

        <motion.div 
          className="project-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="stat-item">
            <span className="stat-icon">⭐</span>
            <span className="stat-value">{project.stars}</span>
            <span className="stat-label">Stars</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">🔱</span>
            <span className="stat-value">{project.forks}</span>
            <span className="stat-label">Forks</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">👁️</span>
            <span className="stat-value">{project.watchers}</span>
            <span className="stat-label">Watchers</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">🐛</span>
            <span className="stat-value">{project.openIssues}</span>
            <span className="stat-label">Open Issues</span>
          </div>
        </motion.div>

        {project.topics && project.topics.length > 0 && (
          <motion.div 
            className="project-topics"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3>Topics</h3>
            <div className="topics-list">
              {project.topics.map((topic, index) => (
                <span key={index} className="topic-tag">{topic}</span>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div 
          className="project-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <img 
            src={project.imgSrc} 
            alt={`${project.name} preview`}
            className="project-detail-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </motion.div>

        <motion.div 
          className="project-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="meta-item">
            <strong>License:</strong> {project.license}
          </div>
          <div className="meta-item">
            <strong>Default Branch:</strong> {project.defaultBranch}
          </div>
          <div className="meta-item">
            <strong>Created:</strong> {new Date(project.created_at).toLocaleDateString()}
          </div>
          <div className="meta-item">
            <strong>Last Updated:</strong> {new Date(project.updated_at).toLocaleDateString()}
          </div>
        </motion.div>

        <motion.div 
          className="project-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="action-button primary"
          >
            View on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
            </svg>
          </a>
          {project.homepage && (
            <a 
              href={project.homepage} 
              target="_blank" 
              rel="noopener noreferrer"
              className="action-button secondary"
            >
              Visit Website
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
              </svg>
            </a>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProjectDetail;
