<div align="center">


  ![Github stars](https://img.shields.io/github/stars/saiemgilani/saiemgilani.com?style=flat-square)
  ![Github Forks](https://img.shields.io/github/forks/saiemgilani/saiemgilani.com?style=flat-square)
  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/saiemgilani/saiemgilani.com?style=flat-square)
  ![GitHub repo size](https://img.shields.io/github/repo-size/saiemgilani/saiemgilani.com?style=flat-square)

</div>


## Tools Used

* **Framework**: [Next.js](https://nextjs.org/)

* **Styling**: [Tailwind CSS](https://tailwindcss.com/)

* **Content**: [MDX](https://github.com/mdx-js/mdx)

* **Database**: [Supabase](https://supabase.com/)

* **Animations**: [Framer Motion](https://framer.com/motion)

* **Deployment**: [Vercel](https://vercel.com)

* **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

* **Plugins**: [rehype](https://github.com/rehypejs/rehype)

* **Analytics**: [Google Analytics](https://analytics.google.com/analytics/web/)

* [SWR](https://swr.vercel.app/)

* [Email.js](https://www.emailjs.com/)

* [React Toastify](https://github.com/fkhadra/react-toastify)


## Run Locally

Clone the project:

```bash
git clone https://github.com/saiemgilani/saiemgilani.com.git
```

Go to the project directory:

```bash
cd saiemgilani.com
```

Install dependencies

```bash
yarn
# or
npm install
```

Start the server:

```bash
yarn dev
# or
npm run dev
```

After that server should be running on [localhost:3000](http://localhost:3000)

> I am using [yarn](https://yarnpkg.com/) you can use [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)

> Warning: You could run into errors if you don't populate the `.env.local` with the correct values


## Setting up the Environment

Rename [`.env.example`](/.env.example) to `.env.local` and then you need to populate that with the respective values.

<details><summary>  More on environment setup </summary>

* `NEXT_PUBLIC_YOUR_SERVICE_ID`: Go to the [Admin Panel](https://dashboard.emailjs.com/admin) of [emailjs.com](https://emailjs.com). If you haven't already added a service then Click on the **Add Service** Button as shown in the image

    ![](https://i.imgur.com/bK5wzkD.png)

    Then choose any method you want I am using **Gmail**

    ![](https://i.imgur.com/zTrFCNJ.png)

    * Then first click on the **Connect Account and log** in with your Gmail account that you want to use to get the emails from.

    * In the second step click on **Create Service** and then copy the **Service ID** and add this ID to `NEXT_PUBLIC_YOUR_SERVICE_ID` in `.env.local`


    ![](https://i.imgur.com/c8ZkUf5.png)

* `NEXT_PUBLIC_YOUR_TEMPLATE_ID`: To get the Template ID visit the [Email Templates](https://dashboard.emailjs.com/admin/templates) section and click on **Create New Template**.

    ![](https://i.imgur.com/TQLrQuz.png)

    And then you will see a window where you can edit your email template after you are satisfied with your template then click on the Save button in the top right corner.

    ![](https://i.imgur.com/98adqhN.png)

    After that you will have your Template ID as shown in the image below:

    ![](https://i.imgur.com/pcqKu3f.png)

* `NEXT_PUBLIC_YOUR_USER_ID`: To get your User ID, Go to [Account](https://dashboard.emailjs.com/admin/account) and then you will be able to see it:

    ![](https://i.imgur.com/oU3tBiY.png)

* `NEXT_PUBLIC_BLOGS_API`: I am using [Dev.to API](https://developers.forem.com/api) to fetch all the blog stats. You can get this API at the bottom of the [Extensions](https://dev.to/settings/extensions) section.

    ![](https://i.imgur.com/zh7V0ZB.png)

* `NEXT_PUBLIC_GA_MEASUREMENT_ID`: You can follow this [guide](https://support.google.com/analytics/answer/9539598?hl=en) to get your Google Analytics ID and then you will be able to use Google Analytics in this project.

* [**Google Analytics Data API**](https://developers.google.com/analytics/devguides/reporting/data/v1): I am using this API to get the analytics of this website so that I can show how many user visit this site in the last 7 days. In this you will need the value of the following properties:

    * `GA_PROPERTY_ID`

    * `GA_CLIENT_EMAIL`

    * `GA_PRIVATE_KEY`

* [**Supabase Integration**](https://supabase.com/): I am using Supabase with ISR to store all my projects and certificates for now. It provides an API that helps you to access the data. To access that data you need two things:

  * `SUPABASE_URL`: Database URL.
  * `SUPABASE_KEY`: It is safe to be used in a browser context.

  **Steps-**

  * To get these go to [Supabase](https://app.supabase.com/sign-in) and log in with your account.

  * Click on **New Project** and fill all the fields.

  * Click on **Create New Project**.

  * Go to the [Settings](https://app.supabase.com/project/_/settings/general) page in the Dashboard.

  * Click **API** in the sidebar.

  * Find your API **URL** and **anon** key on this page.

  * Now you can [Create table](https://app.supabase.com/project/_/editor) and start using it.

    But before you use this there was one issue I had when I was using this it was returning the empty array ([]). It was because of project policies. By default, no-one has access to the data. To fix that you can do the following:

  * Go to [Policies](https://app.supabase.com/project/_/auth/policies).

  * Select your Project.

  * Click on **New Policy**.

    ![](https://i.imgur.com/RsGd8oW.png)

  * You will be presented with two options. You can choose either one. I chose the 1st option:

    ![](https://i.imgur.com/QDAePUQ.png)

  * After that, you will have four options as shown in the following image. You can choose according to your need. I only need the read access so I went with 1st option.

    ![](https://i.imgur.com/h1hSivF.png)

  * Click on **Use this template**.

  * Click on **Review**.

  * Click on **Save Policy**

    After that, you will be able to access the data using [@supabase/supabase-js](https://www.npmjs.com/package/@supabase/supabase-js). Install it and you just set up your project with Supabase.

* `REVALIDATE_SECRET`: As I am using [Supabase](https://supabase.com/), It has a feature called [webhooks](https://supabase.com/docs/guides/database/webhooks) which allow you to send real-time data from your database to another system whenever a table event occurs. So I am using it to revalidate my `projects` and `certificates` page. For that I am providing a custom secret value to verify that request is coming from authenticated source. Let's create webhook:
  * Go to [webhooks](https://app.supabase.com/project/_/database/hooks) page.
  * Click on **Create a new hook**
  * Enter the name of the function hook (example: `update_projects`)

    ![](https://i.imgur.com/QAYIkKZ.png)

  * Choose your table from the dropdown list

    ![](https://i.imgur.com/Hspecbe.png)

  * Select events which will trigger this function hook

    ![](https://i.imgur.com/OYq1qcg.png)

  * Now Choose POST method and enter the revalidate URL (request will be sent to this URL)

    ![](https://i.imgur.com/9gVJ0pO.png)

  *  Then add two HTTP Params `secret` and `revalidateUrl`

    ![](https://i.imgur.com/Mw1Ia0o.png)

  * Now add this secret to your `env.local` and it will update the page when you made some changes to your supabase database.
  * `pages/api/revalidate.ts` is using `revalidateUrl` to update the page with new data.

</details>