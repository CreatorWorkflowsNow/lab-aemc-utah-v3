---
title: Configure Integration
---

# Configure Integration

import TimeEstimate from '@site/src/components/TimeEstimate';

<TimeEstimate>Estimated Time to Complete: 15 minutes</TimeEstimate>

:::info
**THIS SECTION IS OPTIONAL AND CAN SAFELY BE SKIPPED IF YOU ARE BEHIND.**
:::

## Overview

In this section, Priya will go to **Dev** and work on Sydney's app.

| Priya Bapat | Intgration Specialist
|--|--
| ![relative](../assets/images/Priya_Bapat.png) | Priya has many years in IT building integrations on various Platforms. She recently completed some Integration training on ServiceNow and is ready to assist Sydney.

After Jayne approved the Collaboration Request, Priya received an email that she is now a collaborator on the app.

:::info
**SUBJECT:** You are now a collaborator

![relative](https://creatorworkflowsnow.github.io/lab-aemc-utah-v2/assets/images/2023-07-11-20-59-36.png)
:::

When Priya clicks the button in the email she is taken directly to App Engine Studio in Dev; however, we will simulate this.

## Instructions

:::warning
Complete this section in **DEV**.
:::

1. Log in to **Dev**.

2. In the top right, click the user avatar icon » **Impersonate another user**.

![relative](../assets/images/2023-07-11-20-50-38.png)

3. Type **Priya** and click **Priya Bapat** in the search results.

![relative](../assets/images/2023-07-11-20-56-14.png)

4. Click **Impersonate User**. 

![relative](../assets/images/2023-03-14-12-34-24.png)

5. Click **All** » type ```app engine``` » click **App Engine Studio**

![relative](../assets/images/2023-07-11-17-18-49.png)

:::caution
This will open AES in a new browser tab.
:::

6. Click **My Apps** 

![relative](../assets/images/2023-07-11-21-26-37.png)

7. Click on the **IT Time Off Request** app

![relative](../assets/images/2023-07-11-21-27-20.png)

8. Note some of the differences in Priya's experience versus Sydney's. She does not have access to the **Submit** button to request to deploy the app.  She also can not see or modify any of the **Experiences** in the app. 

![relative](../assets/images/2023-07-11-21-29-13.png)

9. Scroll down and click **+Add** next to **Logic and Automation**.

![relative](../assets/images/2023-07-11-21-31-14.png)

10. Click **Flow**

![relative](../assets/images/2023-07-11-21-31-35.png)

11. Click **Build from scratch**

![relative](../assets/images/2023-07-11-21-31-59.png)

12. Enter ```Send data to Workday``` in the **Name** field and click **Continue**

![relative](../assets/images/2023-07-11-21-34-10.png)

![relative](../assets/images/2023-07-11-21-34-43.png)

13. Click **Edit this flow**

![relative](../assets/images/2023-07-11-21-35-23.png)

14. Click **Add a trigger**

![relative](../assets/images/2023-07-11-21-36-31.png)

15. Click **Updated**

![relative](../assets/images/2023-07-11-21-37-01.png)

16. In the **Table** field, type ```time off``` and click the **Time Off Request** table.

![relative](../assets/images/2023-07-11-21-37-53.png)

17. Click **Add filters** next to **Condition**

![relative](../assets/images/2023-07-11-21-45-26.png)

18. Configure a condition of **Active changes to false**

![relative](../assets/images/2023-07-11-21-47-04.png)

19. Click **Done**

![relative](../assets/images/2023-07-11-21-38-16.png)

20. Click **Add an Action, Flow Logic, or Subflow**

![relative](../assets/images/2023-07-11-21-38-51.png)

21. Click **Action** >> type ```log``` >> click **Log**

![relative](../assets/images/2023-07-11-21-43-05.png)

22. Type something in the **Message** field and click **Done**

![relative](../assets/images/2023-07-11-21-44-16.png)

23. Click **Save** in the top-right

![relative](../assets/images/2023-07-11-21-44-55.png)

![relative](../assets/images/2023-07-11-21-47-29.png)

24. Click **Activate** >> **Activate**

![relative](../assets/images/2023-07-11-21-48-02.png)

![relative](../assets/images/2023-07-11-21-48-50.png)

25. Click the **App Engine Studio** browser tab and return to the **Dev** platform view.

![relative](../assets/images/2023-07-11-21-52-42.png)

## Lessons Learned

Priya has built an integration in the app. It is simplistic for the lab, but in a real world scenario she would build a more complex integration for Sydney. 

The app is now ready for Sydney to request it to be deployed. 