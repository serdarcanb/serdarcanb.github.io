import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faCloud, faTv, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { ReactComponent as KubernetesLogo } from "../assets/images/k8s.svg";
import { ReactComponent as DevOpsLogo } from "../assets/images/devops.svg";


const labelsCloud = [
  "AWS",
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
  "Harbor",
  "Ceph",
];

const labelsMonitoring = [
  "Prometheus",
  "Grafana",
  "AlertManager",
  "ELK Stack",
  "Zabbix",
  "Signoz",
  "Jaeger",
];

const labelsDevOps = [
  "Git",
  "GitLab CI/CD",
  "GitHub Actions",
  "CodePipeline",
  "CodeBuild",
  "Jenkins",
  "Sonarqube",
];

const labelsSecurity = [
  "IAM",
  "Keycloak",
  "Security Groups",
  "SSL/TLS",
  "Vault",
  "AWS Cost Explorer",
  "Passbolt",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* Cloud Infrastructure */}
          <div className="skill">
            <FontAwesomeIcon icon={faCloud} size="3x" />
            <h3>Cloud Infrastructure Design & Management</h3>
            <p>
              Expert in designing robust cloud infrastructures using AWS, Terraform, and Terragrunt. 
              By leveraging Ansible for configuration management and GitOps workflows, I ensure 
              automated, scalable, and reliable infrastructure deployments that meet modern business needs.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsCloud.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Containerization */}
          <div className="skill">
            <KubernetesLogo width="60" height="60" />
            <h3>Containerization & Orchestration</h3>
            <p>
              Proficient in building and orchestrating containerized architectures using Docker and Kubernetes. 
              With tools like Istio, Helm, and Harbor, I ensure seamless container deployment and registry management. 
              Ceph provides scalable and efficient storage solutions for high-demand systems.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsContainer.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Monitoring */}
          <div className="skill">
            <FontAwesomeIcon icon={faTv} size="3x" />
            <h3>Monitoring & Observability</h3>
            <p>
              Skilled in implementing monitoring and observability tools like Prometheus, Grafana, and ELK Stack. 
              Leveraging Signoz and Jaeger for distributed tracing ensures optimized performance and real-time insights. 
              I design proactive alarm systems to support teams with efficient incident resolution.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsMonitoring.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div className="skill">
            <DevOpsLogo width="60" height="60" />
            <h3>DevOps Pipelines & CI/CD</h3>
            <p>
              Expertise in integrating CI/CD pipelines using GitLab CI/CD, Jenkins, and Git Actions. 
              I enhance code quality with tools like Sonarqube and ensure secure container registries with Harbor. 
              These pipelines enable faster, reliable, and secure deployments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsDevOps.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="skill">
            <FontAwesomeIcon icon={faShieldHalved} size="3x" />
            <h3>Security & Cost Optimization</h3>
            <p>
              Specialized in security enhancements with IAM, Keycloak, and Vault. 
              I create cost-efficient solutions with AWS Cost Explorer and Passbolt for credential management, 
              ensuring robust security measures and streamlined cost optimization processes.
            </p>
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