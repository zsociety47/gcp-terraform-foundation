# Cross-Cloud Terminology Glossary

A running reference mapping the same underlying concept across GCP, Azure, and AWS. Add to this as new services come up in each weekly project.

| Concept | Definition | GCP | Azure | AWS |
|---|---|---|---|---|
| Virtual network | An isolated, software-defined network you control within the cloud provider, where you define IP ranges and place your resources. | VPC (Virtual Private Cloud) | VNet (Virtual Network) | VPC (Virtual Private Cloud) |
| Subnetwork | A subdivision of a virtual network's IP range, used to segment resources (e.g. public-facing vs internal-only) and apply different routing/rules to each segment. | Subnet | Subnet | Subnet |
| Outbound-only internet for private resources | A managed service that lets resources with no public IP initiate outbound internet connections without being reachable from the internet. | Cloud NAT | NAT Gateway | NAT Gateway |
| Routing control | Defines the paths network traffic takes between subnets, to the internet, or to other networks. | Cloud Router | Route Table / UDR | Route Table |
| Packet filtering | Rules that allow or deny network traffic based on source, destination, port, and protocol. | Firewall Rules (VPC-level) | Network Security Group (NSG) | Security Group / Network ACL |
| Site-to-site VPN | An encrypted tunnel over the public internet connecting your cloud network to another network. | Cloud VPN | VPN Gateway | Site-to-Site VPN |
| Dedicated private connection | A physical, private network link between on-prem infrastructure and the cloud provider. | Cloud Interconnect | ExpressRoute | Direct Connect |
| Identity & access | The system governing who (or what) can do what to which resources. | IAM | Azure AD / Entra ID + RBAC | IAM |
| Non-human identity | An identity assigned to an application, VM, or automated process. | Service Account | Managed Identity / Service Principal | IAM Role (assumed by service) |
| Object storage | Storage for unstructured files accessed over HTTP(S). | Cloud Storage (GCS) | Blob Storage | S3 |
| Relational managed DB | A fully managed SQL database service. | Cloud SQL | Azure SQL / Azure Database for PostgreSQL | RDS |
| NoSQL document DB | A managed, schema-flexible database. | Firestore | Cosmos DB | DynamoDB |
| Serverless functions | Code that runs in response to an event without managing servers. | Cloud Functions | Azure Functions | Lambda |
| Serverless containers | Containerized apps without managing underlying servers. | Cloud Run | Container Apps | Fargate |
| PaaS app hosting | Push code, platform handles scaling and runtime. | App Engine | App Service | Elastic Beanstalk |
| Managed Kubernetes | Managed control plane for containerized workloads. | GKE | AKS | EKS |
| Pub/sub messaging | Producers publish to topics; subscribers receive asynchronously. | Pub/Sub | Service Bus / Event Grid | SNS + SQS |
| Workflow orchestration | Multi-step processes as coordinated workflows. | Cloud Workflows | Logic Apps | Step Functions |
| Scheduled jobs | Recurring schedule triggers (managed cron). | Cloud Scheduler | Logic Apps / Azure Automation | EventBridge Scheduler |
| Secrets management | Secure store for sensitive values. | Secret Manager | Key Vault | Secrets Manager |
| Monitoring/observability | Metrics, dashboards, alerts. | Cloud Monitoring | Azure Monitor | CloudWatch |
| Logging | Centralized log collection and search. | Cloud Logging | Azure Monitor Logs | CloudWatch Logs |
| Infrastructure as code (native) | Provider's own declarative templating. | Deployment Manager | ARM / Bicep | CloudFormation |
| AI/LLM platform | Managed LLM/ML model access via API. | Vertex AI | Azure OpenAI Service | Bedrock |
| Cost management | Track spend, budgets, alerts. | Cloud Billing / Budgets | Cost Management + Billing | Cost Explorer / Budgets |
| BI/dashboarding | Visual dashboards and reports. | Looker Studio | Power BI | QuickSight |
| CI/CD (native) | Provider's managed build/deploy service. | Cloud Build | Azure Pipelines | CodePipeline / CodeBuild |

## Notes

- Terraform provider names: `google` (GCP), `azurerm` (Azure), `aws` (AWS).
- Some services don't have a 1:1 equivalent — call this out in concept docs when relevant.
