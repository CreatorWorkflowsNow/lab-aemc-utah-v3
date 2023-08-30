---
title: Credentials
---

# Exercise: Create Credential Alias

##### Estimated Time to Complete: 5 minutes

## Overview 

A **<a href="https://docs.servicenow.com/csh?topicname=create-pipeline-credentials.html&version=latest" target="_blank">Credential Alias ↗</a>** is a username and password used by ServiceNow to log into a remote system. 

In this case, it will be used by the Controller instance (Prod) to access other ServiceNow Environments such as Dev, Test, QA, etc. 

You will create the Credential Alias with a user account that has already been created for you. 


### Before Exercise
``` mermaid
graph LR
    subgraph Production[Production Instance]
    end
    style Production fill:#CCFFCC,stroke:#B0BAD3,stroke-width:2px,color:#333;
```

### After Exercise
``` mermaid
graph LR
    subgraph Production["Production Instance"]
        Credential("Credential Alias")
    end
    style Production fill:#CCFFCC,stroke:#B0BAD3,stroke-width:2px,color:#333;
    style Credential fill:#ECECFF,stroke:#B0BAD3,stroke-width:2px,color:#333;
```


## Instructions

:::caution
For this exercise, the specific Application Scope is not critical - Global is acceptable. Always check with your Platform Administrator for any company policies around **<a href="https://docs.servicenow.com/csh?topicname=connection-alias.html&version=latest" target="_blank">Connection and Credential Aliases ↗</a>**.
:::

:::warning
**Complete this section in PROD.**
:::

1. Log in to **PROD**.


2. Navigate to **All** >> type **Connection & Credential Aliases** >> click either **Connection & Credential Aliases**.

![Navigate to Aliases](../../assets/images/2023-07-11-15-10-23.png)

3. Click **New** in the top-right to create a new Credential Alias record. 

![Create Alias](../../assets/images/2023-03-07-15-38-10.png)

4. Set **Type** to **Credential**. 

![Set Type](../../assets/images/2023-03-07-15-37-39.png) 

5. Set **Name** to 'Pipeline Credentials' and click **Submit**.

![Set Name](../../assets/images/2023-03-08-14-14-44.png)

![Submit Name](../../assets/images/2023-07-13-17-00-48.png)

6. Click **Pipeline Credentials** to open the record. 

![Open Record](../../assets/images/2023-03-09-13-48-09.png) 

7. Navigate to the **Credentials** Related List and click **New** to add a credential. 

![Add Credential](../../assets/images/2023-07-31-12-28-54.png)

8. Select **Basic Auth Credentials**.

![Select Basic Auth](../../assets/images/2023-03-09-13-50-33.png)

:::info
You will now input credentials for AEMC to log into a ServiceNow instance. 
 
The password for this remote user account is pre-configured. 
 
Errors will occur if you do not use the specified password provided below. 
:::

9. On the **Basic Auth Credentials** form, fill in the following values and click **Submit**.

| **Field** | **Value**
| -- | --|
| **Name** | Pipeline Service Account 
| **User name** | svc_pipeline
| **Password** | ILoveHyperAutomationTimes500!

:::caution
YOU MUST USE THE ENTIRE PASSWORD ABOVE!!

Remember to triple-click to save time selecting.
:::

![Enter Credentials](../../assets/images/2023-06-27-22-50-59.png)

## Lessons Learned

By completing this exercise, you have successfully achieved the following milestones:

- Gained experience in creating and managing Connection & Credential Aliases in ServiceNow.

- Familiarized yourself with Basic Authentication Credentials setup.