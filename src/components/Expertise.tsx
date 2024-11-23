import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faDocker, faGitAlt, faReact } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsCloud = [
  "AWS (EKS, ECS, EC2, S3)",
  "Azure",
  "Terraform",
  "Terragrunt",
  "Ansible",
  "GitOps",
  "Helm",
];

const labelsContainer = [
  "Docker",
  "Kubernetes",
  "Helm",
  "Istio",
  "Nexus",
];

const labelsMonitoring = [
  "Prometheus",
  "Grafana",
  "AlertManager",
  "ELK Stack",
  "Zabbix",
];

const labelsDevOps = [
  "Git",
  "GitLab CI/CD",
  "GitHub Actions",
  "CodePipeline",
  "CodeBuild",
  "Jenkins",
  "Harbor",
];

const labelsSecurity = [
  "IAM",
  "Keycloak",
  "AWS Lambda",
  "Security Groups",
  "SSL/TLS",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* Cloud Infrastructure */}
          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3>Cloud Infrastructure Design & Management</h3>
            <p>I specialize in designing and managing scalable and reliable cloud infrastructures using AWS, Azure, and Terraform. By leveraging Ansible and GitOps workflows, I ensure efficient and automated infrastructure deployment.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsCloud.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Containerization */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Containerization & Orchestration</h3>
            <p>I have built containerized architectures using Docker and Kubernetes for modern applications. By integrating CI/CD pipelines, I optimize application deployments and scalability.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsContainer.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Monitoring */}
          <div className="skill">
            <FontAwesomeIcon icon={faGitAlt} size="3x" />
            <h3>Monitoring & Observability</h3>
            <p>By utilizing tools like Prometheus, ELK Stack, and Zabbix, I enhance system observability and performance monitoring. I have implemented alarms and notification systems to facilitate swift team responses.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsMonitoring.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div className="skill">
            <FontAwesomeIcon icon={faGitAlt} size="3x" />
            <h3>DevOps Pipelines & CI/CD</h3>
            <p>I have integrated CI/CD processes with GitLab and GitHub Actions, streamlining application releases. Additionally, I used Harbor to create private Docker registries, enhancing security and efficiency.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsDevOps.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3>Security & Cost Optimization</h3>
            <p>I have developed IAM policies, Keycloak configurations, and security policies to enhance system security. Using AWS Lambda, I created solutions for resource tagging and cost management.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecurity.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;