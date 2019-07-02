import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  main: {
    margin: 20,
    marginBottom: 100,
  },
  title: {
    color: '#969595'
  },
  body: {
    color: '#747373',
    marginBottom: 20,
  }
}));

function PrivacyPolicy() {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Typography variant="h3" className={classes.title}>Privacy Policy for Bananup</Typography>
      <Typography variant="body1" className={classes.body}>At Bananup, accessible from https://bananup.ml, one of our main priorities
      is the privacy of our visitors. This Privacy Policy document contains types
      of information that is collected and recorded by Bananup and how we use it.

      If you have additional questions or require more information about our Privacy
      Policy, do not hesitate to contact us through email at valentin.ouvrard@yahoo.fr
      </Typography>
      <Typography variant="h4" className={classes.title}>Log Files</Typography>
      <Typography variant="body1" className={classes.body}>Bananup follows a standard procedure of using log files. These files log visitors
      when they visit websites. All hosting companies do this and a part of hosting
      services&apos; analytics. The information collected by log files include internet protocol
      (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp,
      referring/exit pages, and possibly the number of clicks. These are not linked to any
      information that is personally identifiable. The purpose of the information is for
      analyzing trends, administering the site, tracking users&apos; movement on the website,
      and gathering demographic information.</Typography>

      <Typography variant="h4" className={classes.title}>Cookies and Web Beacons</Typography>
      <Typography variant="body1" className={classes.body}>Like any other website, Bananup uses &apos;cookies&apos;. These cookies are used to store
      information including visitors&apos; preferences, and the pages on the website that
      the visitor accessed or visited. The information is used to optimize the users&apos;
      experience by customizing our web page content based on visitors&apos; browser type
      and/or other information.</Typography>

      <Typography variant="h4" className={classes.title}>Privacy Policies</Typography>
      <Typography variant="body1" className={classes.body}>You may consult this list to find the Privacy Policy for each of the advertising
      partners of Bananup. Our Privacy Policy was created with the help of the Privacy
      Policy Generator.

      Third-party ad servers or ad networks uses technologies like cookies, JavaScript,
      or Web Beacons that are used in their respective advertisements and links that
      appear on Bananup, which are sent directly to users&apos; browser. They automatically
      receive your IP address when this occurs. These technologies are used to measure
      the effectiveness of their advertising campaigns and/or to personalize the
      advertising content that you see on websites that you visit.

      Note that Bananup has no access to or control over these cookies that are used by
      third-party advertisers.</Typography>

      <Typography variant="h4" className={classes.title}>Third Party Privacy Policies</Typography>
      <Typography variant="body1" className={classes.body}>Bananup&apos;s Privacy Policy does not apply to other advertisers or websites. Thus,
      we are advising you to consult the respective Privacy Policies of these third-party
      ad servers for more detailed information. It may include their practices and
      instructions about how to opt-out of certain options. You may find a complete
      list of these Privacy Policies and their links here: Privacy Policy Links.

      You can choose to disable cookies through your individual browser options.
      To know more detailed information about cookie management with specific web
      browsers, it can be found at the browsers&apos; respective websites. What Are Cookies?</Typography>

      <Typography variant="h4" className={classes.title}>Children&apos;s Information</Typography>
      <Typography variant="body1" className={classes.body}>Another part of our priority is adding protection for children while using the
      internet. We encourage parents and guardians to observe, participate in, and/or
      monitor and guide their online activity.

      Bananup does not knowingly collect any Personal Identifiable Information from
      children under the age of 13. If you think that your child provided this kind
      of information on our website, we strongly encourage you to contact us immediately
      and we will do our best efforts to promptly remove such information from our records.</Typography>

      <Typography variant="h4" className={classes.title}>Online Privacy Policy Only</Typography>
      <Typography variant="body1" className={classes.body}>This Privacy Policy applies only to our online activities and is valid for visitors
      to our website with regards to the information that they shared and/or collect in
      Bananup. This policy is not applicable to any information collected offline or
      via channels other than this website.</Typography>

      <Typography variant="h4" className={classes.title}>Consent</Typography>
      <Typography variant="body1" className={classes.body}>By using our website, you hereby consent to our Privacy Policy and agree to its
      Terms and Conditions.</Typography>
    </div>
  );
}

export default PrivacyPolicy