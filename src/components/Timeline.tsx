import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">arabam.com</h3>
            <h4 className="vertical-timeline-element-subtitle">Senior DevOps Engineer</h4>
            <ul>
              <li>Docker, Kubernetes, Helm, Ansible, Terraform, Keycloak, Vault, Minio integration and management.</li>
              <li>GitOps integration and management.</li>
              <li>PostgreSQL, Kafka, Redis integration and management.</li>
              <li>Prometheus with Consul integration and management.</li>
              <li>CI/CD pipelines design and management.</li>
              <li>Project Management and Business Development.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Insider</h3>
            <h4 className="vertical-timeline-element-subtitle">DevOps Engineer</h4>
            <ul>
              <li>AWS (EC2, ECS, S3, ACM, EB, Lambda, EKS, Route53, CloudWatch) integration and management.</li>
              <li>EKS Cluster, Helm integration and management.</li>
              <li>Migrated from Elastic Beanstalk to AWS ECS.</li>
              <li>AWS Terraform, Terragrunt integration and management.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">BİTES - Defense & Aerospace Technologies</h3>
            <h4 className="vertical-timeline-element-subtitle">DevOps Engineer</h4>
            <ul>
              <li>Docker, Kubernetes, Helm, Ansible, Envoy integration and management.</li>
              <li>AWS (EC2, ECS, S3, ACM, CloudFront, Route53, CloudWatch) integration and management.</li>
              <li>DigitalOcean Kubernetes Cluster integration and management.</li>
              <li>PostgreSQL, Minio, Redis integration and management.</li>
              <li>Zabbix integration and management.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">TURK AI</h3>
            <h4 className="vertical-timeline-element-subtitle">DevOps Engineer</h4>
            <ul>
              <li>Docker, Kubernetes, GitLab CI/CD, Istio Gateway, Nexus integration and management.</li>
              <li>Microservice integration and management.</li>
              <li>PostgreSQL, Minio, Redis, RabbitMQ integration and management.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Netgsm Communication and Information Technologies Inc</h3>
            <h4 className="vertical-timeline-element-subtitle">DevOps Engineer</h4>
            <ul>
              <li>Proxmox, VMware, KVM integration and management.</li>
              <li>Router, Switch integration and management.</li>
              <li>Firewall, Mail Server integration and management.</li>
              <li>Docker, Kubernetes, GitLab CI/CD integration and management.</li>
              <li>Microservice architecture integration.</li>
              <li>Prometheus, ELK stack integration and management.</li>
              <li>Bash, Python scripting.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;