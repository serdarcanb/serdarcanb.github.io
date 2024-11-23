import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
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
            <p>
            • Docker, Kubernetes, Helm, Ansible, Terraform, Keycloak integration and management.<br />
            • GitOps integration and management.<br />
            • PostgreSQL, Kafka, Redis integration and management.<br />
            • Prometheus with Consul integration and management.<br />
            • CI/CD pipelines design and management.<br />
            • MinIO setup and management.<br />
            • Project Management and Business Development.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Insider</h3>
            <h4 className="vertical-timeline-element-subtitle">DevOps Engineer</h4>
            <p>
            • AWS(EC2,ECS,S3,ACM,EB,Lambda,EKS,Route53,CloudWatch) integration and management.
            • EKS Cluster, Helm integration and management.
            • Migrate from Elastic Beanstalk to AWS ECS
            • AWS Terraform, Terragrunt integration and management.            
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">BİTES - Defense & Aerospace Technologies</h3>
            <h4 className="vertical-timeline-element-subtitle">DevOps Engineer</h4>
            <p>
            • Docker, Kubernetes, Helm, Ansible, Envoy integration and management.
            • AWS(EC2,ECS,S3,ACM,CloudFront,Route53,CloudWatch) integration and management.
            • DigitalOcean Kubernetes Cluster integration and management.
            • Postgresql, Minio, Redis integration and management.
            • Zabbix integration and management.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">TURK AI</h3>
            <h4 className="vertical-timeline-element-subtitle">DevOps Engineer</h4>
            <p>
            • Docker, Kubernetes, Gitlab CI/CD , Istio Gateway ,Nexus integration and management.
            • Microservice integration and management.
            • Postgresql, Minio, Redis, Rabbitmq integration and management.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Netgsm Communication and Information Technologies Inc</h3>
            <h4 className="vertical-timeline-element-subtitle">DevOps Engineer</h4>
            <p>
            • Proxmox,Vmware, KVM integration and management.
            • Router,Switch integration and management.
            • Firewall, Mail Server integration and management.
            • Docker, Kubernetes, Gitlab CI/CD integration and management.
            • Microservice architecture integration .
            • Prometheus , ELK stack integration and management.
            • Bash, Python scripting.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;