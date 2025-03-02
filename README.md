This is a [Next.js](https://nextjs.org) with [Payload CMS](https://payloadcms.com/) using the next Plugins and functionalities:

- [Payload Form Builder](@react-native-firebase/crashlytics) to manage the dynamic creation of the Forms
- [Payload-authjs](https://github.com/CrawlerCode/payload-authjs) to manage the login of the process using Github and Google
- [Payload Email Provider](https://payloadcms.com/docs/email/overview) using NodeMailer with [SendGrid](https://sendgrid.com/en-us)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Execute the migrations with

```bash
npm run payload migrate
```
Configure the **.env** file based on the **.env.example**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### MailDev
To check the mails sent in local env open a separate terminal and execute the command:
```bash
npm run maildev
```
Then open the url http://localhost:1080 to see the MailDev Inbox. 
Use the configuration of env variables of *NodeMailer* provided in **.env.example**
