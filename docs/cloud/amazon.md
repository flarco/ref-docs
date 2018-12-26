# Amazon Web Services

# CLI & APIs

## Installation & Configuration

Obtain AWS Access Key ID/Secret from <https://console.aws.amazon.com/iam/home>

```bash
pip install awscli aws-shell

aws configure
# AWS Access Key ID [None]: ****************EDGQ
# AWS Secret Access Key [None]: ****************aMS/
# Default region name [None]: us-west-2
# Default output format [None]:

aws help
```

### Python API Lib - Boto3

<https://boto3.amazonaws.com/v1/documentation/api/latest/guide/index.html>
<https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/index.html>


### Serverless

<https://github.com/serverless/serverless>

**Installation**
```bash
npm install -g serverless
```

**Create from template**
```bash
serverless create -t aws-nodejs
serverless create -t aws-python
serverless create -t aws-go
```

**Deploy**
```bash
# after configuring AWS creds in ~/.aws/credentials
serverless deploy
```

**Test**
```bash
serverless invoke -f func_name --log
```

## Lambda

Python Deployment: <https://docs.aws.amazon.com/lambda/latest/dg/lambda-python-how-to-create-deployment-package.html>

## CloudFormation Alternatives

<https://github.com/cloudtools/troposphere>

<https://github.com/hashicorp/terraform>

# Certification

## Strategy

- Watch course
- Read WhitePapers:
  - <https://aws.amazon.com/whitepapers/>
  - <https://d0.awsstatic.com/whitepapers/Security/AWS_Security_Whitepaper.pdf>
  - <https://d0.awsstatic.com/whitepapers/AWS%20Storage%20Services%20Whitepaper-v9.pdf>
  - <https://d0.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf>
  - <http://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf>
- Create Python scripts to create, consume and destroy services for all course labs.
  - EC2 Instance
  - S3 Buckets
  - Kinesis Streams
  - RDS Instance
  - Redshift Instance
- Take Practice Exam: <https://aws.amazon.com/certification/certification-prep/>
- References:

  - EC2: <https://aws.amazon.com/ec2/faqs/>
  - S3: <https://aws.amazon.com/s3/faqs/>
  - VPC: <https://aws.amazon.com/vpc/faqs/>
  - Route 53: <https://aws.amazon.com/route53/faqs/>
  - Route RDS: <https://aws.amazon.com/rds/faqs/>
  - Route SQS: <https://aws.amazon.com/sqs/faqs/>

## Certification Paths

![image](https://cloud.githubusercontent.com/assets/7671010/16950248/591f4d18-4d8d-11e6-9cb8-79bdcf7c1893.png)

![image](https://cloud.githubusercontent.com/assets/7671010/16951500/4395f0a4-4d93-11e6-9151-084714591bf7.png)

**Quiz 3 - S3**
![image](https://cloud.githubusercontent.com/assets/7671010/16966927/c63cbace-4dd4-11e6-974a-be969329cd5f.png)

## Exam Feedback

> At least 50% of the questions I got today were excessively detailed Route 53, ELB and VPC/VPC-Peering. Nothing on Lambda, application services, service limits, read replicas, white paper content, CloudFront, Import/Export, CloudWatch, Redshift, Aurora, Resource Groups, Elastic Transcoder and almost nothing on Shared Security Model, RDS, S3 or IAM.
>
> ---
>
> ensure you know about cost efficiency with regards to architecture. quite a few S3 questions, a few Route53 surrounding zone apex. a few bastion host questions. quite a few ec2 questions as to which would be the best option for a situation. a few rds questions on multi az.
>
> ---
>
> There was a lot from VPC,EC2,RDS,S3,DirectConnect,VPN,Security groups and ACLs. Surprisingly a few questions about spot instances and few about DinamoDB
>
> ---
>
> To me looks like 1. Course content and quizzes 2. Doing all practices to be sure every step is well understood (not memorized) 3. Reading FAQ from AWS website on EC2,S3,VPC,SQS,Route53,DirectConnect and IAM and 4. Practice Exam from acloud.guru should be enough.
>
> ---
>
> Yes, just the Cloudguru course material and as mentioned, lots of reading and practice while and after listening to the course content. It is, in my opinion, important to extend your study to the information provided by AWS.
>
> ---
>
> Most of the exam was focus in EC2, S3, RDS, load balancing, cloud front, cloud formation, DynamoDB, Import/export and troubleshooting.

> This course gives a very good knowledge but it nos enough, please go to the AWS console, make labs and practice a lot, additional as Ryan always recommend, go to FAQs, its very helpful.
>
> ---
>
> I started my journey on April 17th and cleared the exam today (July 9) . So almost 3 months of preparation with an average of 2 to 3 hrs per day. This course helped a lot. I practiced end-to-end VPC setup including NAT instance twice the night before exam. In addition to this course, I went through all the white papers suggested on AWS exam website and FAQs of all topics of this video. I bought the mobile app of practice exams and practiced a lot.

## AWS Platform

![image](https://cloud.githubusercontent.com/assets/7671010/16951509/4f793534-4d93-11e6-8dac-3b102e2b0cd4.png)

### Global Infrastructure

All the locations of the server regions, to reduce latency for all the continents

**Availability Zone (AZ)** :: a data center.

**Region** :: Each Region has at least 2 or more AZs, to separate and allow redundancy

**Edge Location** :: Endpoint for Cloudfront, the edge of a region? It caches your files so to reduce wasted trips

### Networking

**VPC** :: Virtual Private Cloud

**Direct Connect** :: A way to connect into AWS without ISP (dark fiber, super secure)

**Route 53** :: Highly Scalable DNS service.

### Compute

**EC2** :: A virtual server

**EC2 Container Service** :: Supports Docker container, highly scalable

**Elastic Beanstalk** :: scalable service. Upload your code and it will provision and scale resources for you. Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring based on the code you upload to it

**Lambda** :: Lets your run code without provisioning or managing servers. So it is as if running code without limits.

### **Storage**

**S3** :: Allows you to store your files. Secure, Durable, Scalable

**Cloudfront** :: works with CDN to deliver content around the world (caching)

**Glacier** :: Archiving and long term backup of data.

**EFS** :: Elastic File System. NAS in the cloud. May be accessed by multiple EC2 instance. It is block level rather than object level.

**Snowball** :: A suitcase looking device that allows you to transport large amount of data into/out of AWS.

**Storage Gateway** :: like SSHFS. A VM in your office, and it replicates information inside AWS

### Databases

**RDS** :: Relational Database Services: MS-SQL, Oracle, MySQL, Etc.

**DynamoDB** :: Amazon's NoSQL engine.

**Elasticache** :: Cache query results

**Redshift** :: Data Warehousing / BI service, very high performance.

**DMS** :: A way of migrating Databases into AWS

### Analytics

**EMR** :: Elastic MapReduce: a way of processing big data

**Data Pipeline** :: A Way of moving data from one service to another

**Elastic Search** :: A managed service to deploy and scale Elasticsearch in AWS cloud.

**Kinesis** :: A platform for streaming data into AWS

**Machine Learning** :: a service to use machine learning

**Quick Sight ::** Business Intelligence Service, cloud powered, visualizations.

### Security & Identity

**IAM** :: Identity Access management: A way to create new users to access the AWS console, to access AWS resources and to set password rotation policies for these new users.

**Directory Service**

**Inspector** :: Inspects your EC2 instance for security vulnerability

**WAF** :: Web application Firewall

**Cloud HSM** :: Hardware Security Module

**KMS** :: Key Management Service

### Management Tools

**Cloud Watch**

**Cloud Formation** :: automated provisioning engine designed to deploy entire cloud environments via a JSON script.

**CloudTrails** :: Auditing AWS

**OpsWorks** :: Configuration Management Service: allow your system administrators to configure and operate your web applications using Chef.

**Config** :: Configuration History / Changes

Service Catalog

**Trusted Advisor** :: Automated Service that scans your environment and tell you how you can save money

### Application Services

**API Gateway** :: Easy to create API

AppStream

CloudSearch

**Elastic Transcoder** :: a way for companies to transcoding media files

**SES** :: Simple Email Service (like Zoho Mail)

**SQS** :: Decoupling your infrastructure

**SWF** :: Simple Workflow Service,

### Developer Tools

CodeCommit

CodeDeploy

CodePipeline

### Mobile Services

Mobile Hub

Cognito

DeviceFarm

Mobile Analytics

SNS :: Simple Notification Service

### Enterprise Applications

**WorkSpaces** :: VDI in the cloud

**WorkDocs** :: Google Drive / Apps for the enterprise

**WorkMail** :: Amazon's version of Exchange

### Internet Of Things

**IoT** ::

---

## IAM

AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources for your users. You use IAM to control who can use your AWS resources (_authentication_) and what resources they can use and in what ways (_authorization_).

Features:

[http://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html#intro-features](http://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html#intro-features)

IAM Components :::

- **Users** :: People
- **Groups** :: Collection of Users
- **Roles** :: Assign AWS resources to specific Roles. Assign Roles to Users
- **Policies** :: a document that defines permissions. You attach policies to a user, a group or a role.

Key Points:

- All Users, Groups, Roles and Policies is global (not specific to Regions, or Zones)
- Best Practice :: Delete root account access keys. Set up MFA (multiple Factor Authentication)
- By Default, Users have no permissions. Permissions are granted by policies

---

## S3

- Is a place to store your files / objects. One cannot (_should not_) install programs, databases or OS, only store files!
- Data is spread across multiple devices and facilities.
- Is Region specific ! Not global, unless you enable cross-Region replication.
- Bucket name is unique. AWS will warn you if the name is already taken.
- S3 File Limit :: 1 Byte to 5TB (with multi-part upload API). There is unlimited storage for each account
- S3 Bucket :: S3 files are stored in buckets. Each bucket has a unique namespace globally.

**Feature available:**

- Tiered storage
- Encryption
- Versioning
- **Storage Classes** :::

      	- **S3 - IA** :: (Infrequently Accessed) mode is for data that is less frequently accessed. Lower fee than standard S3, but fee for retrieval.
      	- **S3 - RRS** :: (Reduced Redundancy Storage) mode is lower cost, for files that are not so important, files that you are willing to lose - **99.99% durability & availability**. Use for data that can be easily regenerated (like thumbnails). Able to sustain the loss of 1 availability zone.
      	- **Glacier** :: Very cheap, but used for archival only. Take 3 to 5 hours to restore files from Glacier.

![image](https://cloud.githubusercontent.com/assets/7671010/16966814/4fee1b7e-4dd4-11e6-997d-f7bc79eb8abc.png)

**S3 is made of key / values stores:**

- Key is name
- Value is data
- Version ID
- Metadata (data about the data you are storing)
- Access Control Lists

**S3 Consistency** :::

- Read after write consistency :: (file is immediately available for reading after writing / PUTS)
- Eventual consistency for overwrite and delete :: (Can take some time to propagate)
- **New objects are immediately available. Modifications (update/delete) to existing objects can take some time to propagate.**
- Able to sustain the loss of 2 availability zones

**Guarantees / SLAs for Standard S3** :::

- 99% availability
- 999999999% (11 x 9's) durability (the chance of losing your files)

### Versioning:

- Keeps all versions / history of the file
- Take a lot of space, each time an update / delete is made, space is added up
- Cannot disable once enabled, can only Suspend
- Multi Factor Authentication (MFA) can be used for extra security
- Cross-Region Replication :: replication of all files to another S3 Bucket located in another Region. Requires Versioning enabled !

### LifeCycle Rules

Lifecycle rules enable you to automatically transition objects to:::

- Standard / Infrequent Access (IA) Storage Class (30 day minimum delta from creation date)
- **and/or** archive objects to the Glacier Storage Class (30 day minimum delta from creation date, 60 day minimum delta from creation date if moved to IA first)
- **and/or** remove objects after a specified time period.

### Retrival Times

- Standard - Infrequent Access (IA): a few miliseconds
- Glacier : 3 to 5 hours

![image](https://cloud.githubusercontent.com/assets/7671010/16962426/8ad8c122-4dbf-11e6-98a3-f22bf17e3e86.png)

### Security / Encryption

Acess Control is applied through:

- Bucket Policies
- Access Control Lists

**_By default all buckets created are PRIVATE._**
_Logging can be turned on to get access logs._

The 4 different methods of Encryption:::

- In Transit - SSL/TLS
- At Rest (Server Side Encryption) - S3 Managed Keys - **SSE-S3** - AWS Key Management Service, Managed Keys - **SSE-KMS** - Allows Audit Trail - Server Side Encryption with Customer Provided Keys - **SSE-C**
- Client Side Encryption

### S3 Transfer Acceleration

Use the CloudFront Edge server (close to you) to upload files to, which then will be transferred to your bucket from the Edge server.

### Mounting S3 in Linux

S3FS:

[https://www.robusta-hosting.eu/en/blog/development/2015/04/install-s3fs-ubuntu-1404-lts](https://www.robusta-hosting.eu/en/blog/development/2015/04/install-s3fs-ubuntu-1404-lts)

[https://fullstacknotes.com/mount-aws-s3-bucket-to-ubuntu-file-system/](https://fullstacknotes.com/mount-aws-s3-bucket-to-ubuntu-file-system/)

```
mkdir -p /__/aws_larco1
s3fs -o allow_other,use_cache=/tmp/cache larco1 /__/aws_larco1
sudo umount /__/aws_larco1 # unmounts
```

Faster Mounting Alternative?

[http://serverfault.com/questions/396100/s3fs-performance-improvements-or-alternative](http://serverfault.com/questions/396100/s3fs-performance-improvements-or-alternative)

[https://github.com/archiecobbs/s3backer](https://github.com/archiecobbs/s3backer)

[https://bitbucket.org/nikratio/s3ql/overview](https://bitbucket.org/nikratio/s3ql/overview)

[https://github.com/skoobe/riofs](https://github.com/skoobe/riofs)

[https://github.com/kahing/goofys](https://github.com/kahing/goofys)

[http://aws.amazon.com/code/128](http://aws.amazon.com/code/128)

- Most reliable way to mount S3 to EC2 is through **S3FS**.
- Fastest is **riosfs** or **goofyfs**

---

## CloudFront

A Content Delivery Network (CDN): is a caching system distributed over worldwide servers to deliver content to the user from the closest server.

**Edge Location** - the server location where the content will be cached for the Time to Live (TTL).
**Origin** - the server where the original object is located (whether S3, EC2, ELB or Router53 or non-AWS source).
**Distribution** - Th is a name given to a group of Edge Locations. - Web Distribution (Web site contents) - RTMP Distribution (for media/flash files)

Notes:

- Edge Locations are not for read only, they can be written to as well, and will be synced to origin.
- Objects are cached for the life of the TTL (TTL)
- You can clear the cached objects, but will be charged.
- You are allowed to have multiple origins (identified by _Origin ID_) in the same Distribution.
- You are allowed to restricted (blacklist or whitelist) countries from accessing your CDN distribution through _Geo-Restrictions_.

Once the Distribution is deployed, all content will be accessible though the new domain. Let us assume the distribution domain is

```
d2turqmfcvpcvf.cloudfront.net
```

and the file origin path is

```
https://s3.amazonaws.com/larco1/2016-07-19+14_45_55-Settings.png
```

the new path provided by the distribtion will be:

```
https://d2turqmfcvpcvf.cloudfront.net/2016-07-19+14_45_55-Settings.png
```

---

## Storage Gateway

Storage Gateway (SG) is a service to connect on-premise software to cloud-stored data seamlessly and securely.

It is available for download as a Virtual Machine (ESXi or Hyper-V), and sits / runs inside your IT infrastrucuture.

Types of Gateways:

- **Gateway Stored Volumes** :::

      	- Your entire dataset is stored onsite, and SG is constantly monitoring changes and replicating in S3. Best used when internet is not reliable.

- **Gateway Cached Volumes** :::

      	- Your entire dataset is stored in S3, and only frequently accessed files are stored onsite. Most effective when internet connection is solid, this removes the need to buy large storage arrays (SAN) -> Saves money.

- **Gateway Virtual Tape Library (VTL)** ::: - You have limitless collection of virtual tapes, which can be stored in S3 or Glacier. Each virtual tape is industry standard (iSCSI).

---

## Import / Export

- Import / Export Disk :::

      	- Accelerates moving large amounts of data into / out-of AWS using shipped portable storage devices (bypassing the Internet)
      	- Customer buys disk, puts data, ships to Amazon, Amazon uploads to AWS and ships disk back to customer.
      	- Imports to **EBS, S3, Glacier**
      	- Exports from **S3**
      	- ![image](https://cloud.githubusercontent.com/assets/7671010/16964716/ed21b1b2-4dca-11e6-853a-df86dc5b4587.png)

- Import / Export Snowball :::

      	- Pentabyte scale data transport. 50TB max per snowball.
      	- 256-bit encryption
      	- Industry-standard Trusted Platform Module (TPM)
      	- Imports to **S3**
      	- Exports from **S3**
      	- ![image](https://cloud.githubusercontent.com/assets/7671010/16964856/7d9aa83e-4dcb-11e6-92d5-b745e263ba57.png)

---

## EC2

### EBS (Elastic Block Store)

![image](https://cloud.githubusercontent.com/assets/7671010/16951520/5b90e31c-4d93-11e6-86ad-5a2d4e4212be.png)
